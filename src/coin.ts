import * as utils from '@dcl/ecs-scene-utils'
import * as myUI from './ui'

// import { externalLink } from './game'

/**
 * Sound is a separated from the coin entity so that you can
 * still hear it even when the coin is removed from the engine.
 */

export let totalCans: number = 0;

const coinPickupSound = new Entity()
coinPickupSound.addComponent(new Transform())
engine.addEntity(coinPickupSound)
coinPickupSound.setParent(Attachable.AVATAR)
coinPickupSound.addComponent(
  new AudioSource(new AudioClip('sounds/coinPickup.mp3'))
)
engine.addEntity(coinPickupSound)

export function createCoin(
  model: GLTFShape,
  transform: Transform,
  triggerShape: utils.TriggerBoxShape,
  externalLink
): Entity {
  const entity = new Entity()
  engine.addEntity(entity)
  entity.addComponent(model)
  entity.addComponent(transform)

  // Create trigger for coin
  entity.addComponent(
    new utils.TriggerComponent(triggerShape, {
      onCameraEnter: () => {
        // Camera enter
        entity.getComponent(Transform).scale.setAll(0)
        coinPickupSound.getComponent(AudioSource).playOnce()
        totalCans = totalCans + 1
        myUI.canPuzzleCompletion.increase(.127);
        log(totalCans)

        if (totalCans > 7) {
          log('You won');
          log('Show winPLane');

          myUI.canPuzzleRewardMessage()
          externalLink.showLink()
          //externalLink.getComponent(PlaneShape).visible = true;


        }




        // Add to total coins picked up
      },
      onCameraExit: () => {
        // Camera exit
        engine.removeEntity(entity)
      },
    })
  )
  return entity
}





