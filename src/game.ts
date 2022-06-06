import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../1ab2733f-1782-4521-9eda-6aa8ad684277/src/item"
import Script2 from "../e7a6c753-ea84-4c8e-bb94-4523407a5d55/src/item"
import Script3 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script4 from "../f89ab04f-46ef-42ea-912b-b194eb8d2f02/src/item"
import Script5 from "../8bd080c9-9954-43b2-a6ac-0b0913d298c0/src/item"
import Script6 from "../8d62d5a3-411c-43f8-a438-574ccf3d0fbe/src/item"
import Script7 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script8 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import * as utils from '@dcl/ecs-scene-utils'
import { createCoin } from './coin'
import { cPuzzlee, createButton, cMuralScene, solarPunkLink, puzzleRewardLink } from './game-obj'
import * as myUI from './ui'
import { getUserData } from "@decentraland/Identity"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const triggerArea = new Entity('triggerArea')
engine.addEntity(triggerArea)
triggerArea.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(15.5, 8.5, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.029557704925537, 3.2022972106933594, 3.202298402786255)
})
triggerArea.addComponentOrReplace(transform6)

const triggerArea2 = new Entity('triggerArea2')
engine.addEntity(triggerArea2)
triggerArea2.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(16.5, 7.5, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(10.674324989318848, 3.2022972106933594, 3.2022976875305176)
})
triggerArea2.addComponentOrReplace(transform7)

const messageBubble = new Entity('messageBubble')
engine.addEntity(messageBubble)
messageBubble.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(15.17530632019043, 9.5, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
messageBubble.addComponentOrReplace(transform8)

const externalLink4 = new Entity('externalLink4')
engine.addEntity(externalLink4)
externalLink4.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(26.491958618164062, 18.337600708007812, 15.292529106140137),
  rotation: new Quaternion(4.3216108012859075e-15, -0.005133539438247681, 6.119735274090488e-10, 0.9999868869781494),
  scale: new Vector3(7.225797176361084, 4.927104473114014, 0.5350118279457092)
})
externalLink4.addComponentOrReplace(transform9)

const externalLink5 = new Entity('externalLink5')
engine.addEntity(externalLink5)
externalLink5.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(25.957727432250977, 23.837600708007812, 15.25778579711914),
  rotation: new Quaternion(4.3216108012859075e-15, -0.005133539438247681, 6.119735274090488e-10, 0.9999868869781494),
  scale: new Vector3(7.225802421569824, 4.927104473114014, 0.5350118279457092)
})
externalLink5.addComponentOrReplace(transform10)


const externalLink8 = new Entity('externalLink8')
engine.addEntity(externalLink8)
externalLink8.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(4.482763290405273, 18.337600708007812, 15.037609100341797),
  rotation: new Quaternion(4.3216108012859075e-15, -0.005133539438247681, 6.119735274090488e-10, 0.9999868869781494),
  scale: new Vector3(7.22579288482666, 4.927104473114014, 0.5350118279457092)
})
externalLink8.addComponentOrReplace(transform11)

const externalLink9 = new Entity('externalLink9')
engine.addEntity(externalLink9)
externalLink9.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(5.027318477630615, 23.837600708007812, 15.113370895385742),
  rotation: new Quaternion(4.3216108012859075e-15, -0.005133539438247681, 6.119735274090488e-10, 0.9999868869781494),
  scale: new Vector3(7.225799560546875, 4.927104473114014, 0.5350118279457092)
})
externalLink9.addComponentOrReplace(transform12)

const externalLink10 = new Entity('externalLink10')
engine.addEntity(externalLink10)
externalLink10.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(16.482763290405273, 15.798141479492188, 8.034975051879883),
  rotation: new Quaternion(4.922192820976286e-14, -0.010228227823972702, 1.2193255294334904e-9, 0.999947726726532),
  scale: new Vector3(14.448592185974121, 4.927104473114014, 0.5352362394332886)
})
externalLink10.addComponentOrReplace(transform13)

const twitterButtonLink = new Entity('twitterButtonLink')
engine.addEntity(twitterButtonLink)
twitterButtonLink.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(14, 10.5, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
twitterButtonLink.addComponentOrReplace(transform14)

const discordButtonLink = new Entity('discordButtonLink')
engine.addEntity(discordButtonLink)
discordButtonLink.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(16.5, 10.5, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
discordButtonLink.addComponentOrReplace(transform15)

const triggerArea3 = new Entity('triggerArea3')
engine.addEntity(triggerArea3)
triggerArea3.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(15.5, 15, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.968852043151855, 3.2022972106933594, 5.14223051071167)
})
triggerArea3.addComponentOrReplace(transform16)

const triggerArea4 = new Entity('triggerArea4')
engine.addEntity(triggerArea4)
triggerArea4.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(16.05670928955078, 15, 11.267332077026367),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.968852043151855, 3.2022972106933594, 5.14223051071167)
})
triggerArea4.addComponentOrReplace(transform17)

const messageBubble3 = new Entity('messageBubble3')
engine.addEntity(messageBubble3)
messageBubble3.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(15, 15, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
messageBubble3.addComponentOrReplace(transform18)

const externalLink11 = new Entity('externalLink11')
engine.addEntity(externalLink11)
externalLink11.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(15.210407257080078, 9.837600708007812, 8.156913757324219),
  rotation: new Quaternion(4.3216108012859075e-15, -0.005133539438247681, 6.119735274090488e-10, 0.9999868869781494),
  scale: new Vector3(2.5718507766723633, 1.7536817789077759, 0.19042472541332245)
})
externalLink11.addComponentOrReplace(transform19)

/* const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(15.5, 21.337600708007812, 5),
  rotation: new Quaternion(4.3216108012859075e-15, -0.005133539438247681, 6.119735274090488e-10, 0.9999868869781494),
  scale: new Vector3(33.133487701416016, 4.927104473114014, 0.5352045297622681)
})
externalLink.addComponentOrReplace(transform20) */

const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(13.5, 26.837600708007812, 5),
  rotation: new Quaternion(0.29307377338409424, 0.07449822127819061, -0.02020230144262314, 0.952968955039978),
  scale: new Vector3(18.329816818237305, 6.535341262817383, 0.7668797373771667)
})
externalLink2.addComponentOrReplace(transform21)

const triggerArea5 = new Entity('triggerArea5')
engine.addEntity(triggerArea5)
triggerArea5.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(15, 29, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(24.177349090576172, 4.803445816040039, 9.606898307800293)
})
triggerArea5.addComponentOrReplace(transform22)

const radioCyberpunk = new Entity('radioCyberpunk')
engine.addEntity(radioCyberpunk)
radioCyberpunk.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(7, 29.5, 15.149730682373047),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
radioCyberpunk.addComponentOrReplace(transform23)

const triggerArea6 = new Entity('triggerArea6')
engine.addEntity(triggerArea6)
triggerArea6.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(4, 0, 14),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(10.674317359924316, 4.803445816040039, 7.205183506011963)
})
triggerArea6.addComponentOrReplace(transform24)

const messageBubble2 = new Entity('messageBubble2')
engine.addEntity(messageBubble2)
messageBubble2.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(3, 2, 16.5),
  rotation: new Quaternion(-5.195535456428756e-16, 0.5555702447891235, -6.622911996601033e-8, 0.8314695954322815),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
messageBubble2.addComponentOrReplace(transform25)

const screen = new Entity('screen')
engine.addEntity(screen)
screen.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(15.536937713623047, 0, 16.02584457397461),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
screen.addComponentOrReplace(transform26)
const gltfShape2 = new GLTFShape("54115822-fbb5-4e0b-a1ea-1d26a2555e39/screen.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
screen.addComponentOrReplace(gltfShape2)

// this is the game object placemetns for the files collection game

/* const gameObjectPlacement = new Entity('gameObjectPlacement')
engine.addEntity(gameObjectPlacement)
gameObjectPlacement.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(15.5, 0.7707538604736328, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
gameObjectPlacement.addComponentOrReplace(transform27)
const gltfShape3 = new GLTFShape("e89900cf-c45b-4c47-92e4-34e5da1feb66/game object placement.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
gameObjectPlacement.addComponentOrReplace(gltfShape3) */

const fileAnim = new Entity('fileAnim')
engine.addEntity(fileAnim)
fileAnim.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(15.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fileAnim.addComponentOrReplace(transform28)
const gltfShape4 = new GLTFShape("e16f5e07-568c-4f03-bd05-9a75f410df95/file anim1.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
fileAnim.addComponentOrReplace(gltfShape4)

const fileAnim2 = new Entity('fileAnim2')
engine.addEntity(fileAnim2)
fileAnim2.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(15.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fileAnim2.addComponentOrReplace(transform29)
const gltfShape5 = new GLTFShape("f2eb73c2-05c1-41be-a2e4-a348484301c2/file anim2.2.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
fileAnim2.addComponentOrReplace(gltfShape5)

const fileAnim3 = new Entity('fileAnim3')
engine.addEntity(fileAnim3)
fileAnim3.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(15.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fileAnim3.addComponentOrReplace(transform30)
const gltfShape6 = new GLTFShape("c35fb6c8-945c-45c0-afb0-c5dc5e912fde/file anim1.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
fileAnim3.addComponentOrReplace(gltfShape6)

const centerpieceDisplayGlobe = new Entity('centerpieceDisplayGlobe')
engine.addEntity(centerpieceDisplayGlobe)
centerpieceDisplayGlobe.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
centerpieceDisplayGlobe.addComponentOrReplace(transform31)
const gltfShape7 = new GLTFShape("d43506bb-10c4-4e09-98b8-4b897dac3a8b/centerpiece display globe 2.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
centerpieceDisplayGlobe.addComponentOrReplace(gltfShape7)

const filecoinTest = new Entity('filecoinTest')
engine.addEntity(filecoinTest)
filecoinTest.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(15.5, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
filecoinTest.addComponentOrReplace(transform32)
const gltfShape8 = new GLTFShape("ccc26cbe-10d1-4820-bb84-61b7613071a3/Filecoin_test18.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
filecoinTest.addComponentOrReplace(gltfShape8)

const messageBubble4 = new Entity('messageBubble4')
engine.addEntity(messageBubble4)
messageBubble4.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(15.5, 15.5, 3.500000238418579),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
messageBubble4.addComponentOrReplace(transform33)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

// video stream player






const screen2 = new Entity()
screen2.setParent(_scene)
screen2.addComponent(new PlaneShape())
screen2.addComponent(
  new Transform({
    position: new Vector3(15.5, 19, 10),
    scale: new Vector3(9, 5, 1)
  })
)

engine.addEntity(screen2)

const myVideoClip = new VideoClip(
  'https://hourglass.dclstream.com/live/obs_source/playlist.m3u8'
)

const myVideoTexture = new VideoTexture(myVideoClip)
myVideoTexture.play()
myVideoTexture.loop = true


const myVideoMaterial = new Material()
myVideoMaterial.albedoTexture = myVideoTexture
myVideoMaterial.roughness = 1
myVideoMaterial.specularIntensity = 0
myVideoMaterial.metallic = 0
myVideoMaterial.emissiveTexture = myVideoTexture
myVideoMaterial.emissiveColor = Color3.White()
myVideoMaterial.emissiveIntensity = 0.6
screen2.addComponentOrReplace(myVideoMaterial)
// end video stream player


//solar punk link
let externalLink = new solarPunkLink()
externalLink.setParent(_scene)
externalLink.hideLink()

const script7 = new Script7()
script7.spawn(externalLink, { "url": "https://forms.gle/nbY7J19gVWcmPu2L9", "name": "You found the cans!! Claim Your Poap In The Alley!" }, createChannel(channelId, externalLink, channelBus))


//Puzzle Reward Link
let puzzleRLink = new puzzleRewardLink()
puzzleRLink.setParent(_scene)
puzzleRLink.hideLink()

const sc = new Script8()
sc.spawn(puzzleRLink, { "url": "https://forms.gle/nbY7J19gVWcmPu2L9", "name": "You Solved The Puzzle! Claim Your Poap In The Alley!" }, createChannel(channelId, puzzleRLink, channelBus))



// adding coin came logic below
const coinShape = new GLTFShape('models/file_game_objecgt.glb') // Include the spinning animation


// Contains the positions for each can
const coinPositions = [
  new Vector3(7.8, 6.1, 21.4), // outside 1st floor ring
  new Vector3(26.25, 3.3, 13.7), // outside
  new Vector3(9.1, 12.9, 22.8), // 1st floor
  new Vector3(23.8, 12.8, 17.6), // 1st floor 2
  new Vector3(15.8, 16.1, 5.6), // front room behind screen
  new Vector3(20.9, 24.4, 25.6), // 3rd floor 1
  new Vector3(24.9, 27.9, 10.75), // top fllor before globe
  new Vector3(15.6, 27.8, 16),
] 



const triggerBoxShape = new utils.TriggerBoxShape(
  new Vector3(1.5, 3, 1.5),
  new Vector3(0, 1, 0)
) // Trigger shape for coin

// Setup the file game
for (const coinPosition of coinPositions) {
  createCoin(
    coinShape,
    new Transform({ position: coinPosition }),
    triggerBoxShape,
    externalLink
  )
}

myUI.buildUI()

let FarOutMural = new cMuralScene(puzzleRLink)


// player enters and exits scene
executeTask(async () => {
  //myUI.welcomeMessage();
  let myPlayer = await getUserData()

  onEnterSceneObservable.add((player) => {
    //myUI.welcomeMessage()
  })

  onLeaveSceneObservable.add((player) => {
    // log("player left scene: ", player.userId)
    // if (player.userId === myPlayer?.userId) {
    //   log("I left the scene!")
    // }
  })
})


const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
sc.init(options)


script1.spawn(triggerArea2, {"enabled":true,"onEnter":[{"entityName":"externalLink11","actionId":"activate","values":{}}],"onLeave":[{"entityName":"externalLink11","actionId":"activate","values":{}}]}, createChannel(channelId, triggerArea2, channelBus))

//script3.spawn(externalLink, {"url":"decentraland.org","name":"Art 2"}, createChannel(channelId, externalLink, channelBus))
script3.spawn(externalLink2, {"url":"filecoin.io","name":"Art 1"}, createChannel(channelId, externalLink2, channelBus))
script3.spawn(externalLink4, {"url":"filecoin.io","name":"Room 3"}, createChannel(channelId, externalLink4, channelBus))
script3.spawn(externalLink5, {"url":"filecoin.io","name":"Room 5"}, createChannel(channelId, externalLink5, channelBus))
script3.spawn(externalLink8, {"url":"filecoin.io","name":"Room 4"}, createChannel(channelId, externalLink8, channelBus))
script3.spawn(externalLink9, {"url":"filecoin.io","name":"Room 6"}, createChannel(channelId, externalLink9, channelBus))
script3.spawn(externalLink10, {"url":"filecoin.io","name":"Information"}, createChannel(channelId, externalLink10, channelBus))
// script3.spawn(externalLink11, {"url":"filecoin.io","name":"FILECOIN Wearable"}, createChannel(channelId, externalLink11, channelBus))

// social media buttons 
script4.spawn(twitterButtonLink, {"url":"filecoin","bnw":false}, createChannel(channelId, twitterButtonLink, channelBus))
//script5.spawn(discordButtonLink, {"url":"/channels/417796904760639509/433376431603580970","bnw":false}, createChannel(channelId, discordButtonLink, channelBus))

// message bubbles
script1.spawn(triggerArea, {"enabled":true,"onEnter":[{"entityName":"messageBubble","actionId":"open","values":{}}],"onLeave":[{"entityName":"messageBubble","actionId":"close","values":{}}]}, createChannel(channelId, triggerArea, channelBus))
script2.spawn(messageBubble, {"text":"Here at the HQ, we organize \n millions of data points daily. Our \n mission at Filecoin is to preserve \n humanity’s most valuable \ninformation and we need your help! \n\nCollect files around the space and \nadd them to the Filecoin network \non the top floor to redeem \nyour NFT wearable!","fontSize":11}, createChannel(channelId, messageBubble, channelBus))


// welcoem text 
script1.spawn(triggerArea6, {"enabled":true,"onEnter":[{"entityName":"messageBubble2","actionId":"open","values":{}}],"onLeave":[{"entityName":"messageBubble2","actionId":"close","values":{}}]}, createChannel(channelId, triggerArea6, channelBus))
script2.spawn(messageBubble2, {"text":"Welcome To \nFileCoin HQ","fontSize":20}, createChannel(channelId, messageBubble2, channelBus))

/* script1.spawn(triggerArea4, {"enabled":true,"onEnter":[{"entityName":"messageBubble3","actionId":"open","values":{}}],"onLeave":[{"entityName":"messageBubble3","actionId":"open","values":{}}]}, createChannel(channelId, triggerArea4, channelBus))
script2.spawn(messageBubble3, {"text":"your in the right spot for a presentation@\n","fontSize":20}, createChannel(channelId, messageBubble3, channelBus)) */

/* script1.spawn(triggerArea3, {"enabled":true,"onEnter":[{"entityName":"messageBubble4","actionId":"open","values":{}}],"onLeave":[{"entityName":"messageBubble4","actionId":"close","values":{}}]}, createChannel(channelId, triggerArea3, channelBus))
script2.spawn(messageBubble4, {"text":"test words","fontSize":5}, createChannel(channelId, messageBubble4, channelBus))
 */


//  radio
script1.spawn(triggerArea5, {"enabled":true,"onEnter":[{"entityName":"radioCyberpunk","actionId":"activate","values":{}}],"onLeave":[{"entityName":"radioCyberpunk","actionId":"deactivate","values":{}}]}, createChannel(channelId, triggerArea5, channelBus))
script6.spawn(radioCyberpunk, {"startOn":false,"volume":1,"onClickText":"Radio On/Off","onClick":[],"onActivate":[]}, createChannel(channelId, radioCyberpunk, channelBus))




