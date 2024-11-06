import { _decorator, Component, Node,SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;



@ccclass('cow')
export class cow extends Component {
    @property([SpriteFrame])
    public cowSprite: SpriteFrame[] = [];
    start() {

    }

    update(deltaTime: number) {
        
    }
}


