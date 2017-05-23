from m import Router, Application
from m.utils import jsonify


class Storage:
    def __init__(self):
        self.todo = []
        self.next_id = 0

    def add(self, content):
        id = self.next_id
        self.todo.append({'id': id, 'content': content, 'done': False})
        self.next_id += 1
        return id

    def done(self, id):
        for to in self.todo:
            if to['id'] == id:
                to['done'] = True

    def reopen(self, id):
        for to in self.todo:
            if to['id'] == id:
                to['done'] = False
                break

    def list(self, filter='todo'):
        if filter == 'todo':
            return [t for t in self.todo if not t['done']]
        if filter == 'all':
            return [t for t in self.todo]

router = Router('/api/todo')


@router.route('', methods=['POST'])
def add(ctx, request):
    content = request.json()['content']
    id = ctx.storage.add(content)
    return jsonify(code=200, id=id)


@router.route('/{filter:str}', methods=['GET'])
def list(ctx, request):
    filter = request.args.get('filter')
    todo = ctx.storage.list(filter)
    return jsonify(code=200, todo=todo)


@router.route('/{id:int}/done', methods=['PUT'])
def done(app, request):
    id = request.args.get('id')
    app.storage.done(id)
    return jsonify(code=200, id=id)


@router.route('/{id:int}/reopen', methods=['PUT'])
def reopen(ctx, request):
    id = request.args.get('id')
    ctx.storage.reopen(id)
    return jsonify(code=200, id=id)


app = Application([router], storage=Storage())


if __name__ == '__main__':
    from  wsgiref.simple_server import make_server
    server = make_server('0.0.0.0', 8081, app)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        server.shutdown()
