import Chapter from '../components/documentationComponents/Chapter';
import Section from '../components/documentationComponents/Section';
import SpecialText from '../components/documentationComponents/SpecialText';
import Video from '../components/documentationComponents/Video';
import YoutubeVideo from '../components/documentationComponents/YoutubeVideo';

const data = {
    meshparticles: {
        title: "Mesh Particles",
        description: `
            Spawn 3D particles inside your world.
        `,
        elements: [
            <Chapter title="Introduction" sections={[
                <Section items={
                    <>
                        <p>
                            Meshparticles is a plugin that allows you to spawn 3D objects as particles. 
                            It's compatible with:
                            &nbsp;<SpecialText type="class" content="Basepart's"/>,
                            &nbsp;<SpecialText type="class" content="Meshpart's"/> or
                            &nbsp;<SpecialText type="class" content="Model's"/>
                        </p>
                        <YoutubeVideo src="https://www.youtube.com/embed/qLJnRs3mpUE" />
                    </>
                }/>,
                <Section title="Important Info" items={
                    <>
                        <p>
                        When the plugin is firstly installed, studio is opened or the plugin updates. 
                        3 scripts will be inserted into your place. 
                        2 of wich are to activate the particle system on 
                        &nbsp;<SpecialText type="class" content="Part's"/>,
                        &nbsp;<SpecialText type="class" content="Attachment's"/>
                        &nbsp;that share the collection tag 
                        &nbsp;<SpecialText type="string" content="ParticleSystem" />. The other one is the Meshparticle module itself. It can be found in 
                        &nbsp;<SpecialText type="path" content="game.ReplicatedStorage > ModulePack > Meshparticles" />
                        </p>
                    </>
                }/>
            ]}/>,
            <Chapter title="Plugin Installation" sections={[
                <Section title="How To Install" items={
                    <>
                        <p>
                            Go to 
                            &nbsp;<SpecialText type="link" content="https://www.roblox.com/library/11453345861/ParticlePlugin"/>&nbsp;
                            And click on the install button to install the plugin.
                        </p>
                    </>
                }/>,
                <Section title="Open Plugin" items={
                    <>
                        <p>
                            After installing the plugin you should see a button appear within the plugins tab.
                            By clicking on it the plugin will open.
                        </p>
                    </>
                }/>
            ]}/>,
            <Chapter title="Functions" sections={[
                <Section title="Add" items={
                    <>
                        <p>
                            By clicking the Add button
                            all selected objects that meet class conditions
                            &nbsp;<SpecialText type="class" content="Part"/> or
                            &nbsp;<SpecialText type="class" content="Attachment"/>&nbsp;
                            will change into a particle system.
                        </p>
                    </>
                }/>,
                <Section title="Remove" items={
                    <>
                        <p>
                            By clicking the Remove button all selected objects will be cleared of attributes and tags.
                        </p>
                    </>
                }/>,
                <Section title="Copy" items={
                    <>
                        <p>
                            By clicking the Copy button all attributes and its values from the first selected object are copied and stored.
                        </p>
                    </>
                }/>,
                <Section title="Paste" items={
                    <>
                        <p>
                            By clicking the Paste button all selected objects that meet class conditions will enherit the last copy done with the copy button.
                        </p>
                    </>
                }/>,
            ]}/>,
            <Chapter title="Events" sections={[
                <Section title="" items={
                    <>
                        <p>
                            The event page can be accesed by clicking
                            &nbsp;<SpecialText type="path" content="More > Events"/>.
                            By pressing the add button a template script will be added to the first selection.
                            Event scripts belong in a particle.
                        </p>
                        <ul>
                            <li>
                                <p className='test'>
                                    <span className='bold'>OnDeath - </span>
                                    This event fires when a particle dies. 
                                    Happens when lifetime is acceded or on death by collision.
                                </p>
                            </li>
                            <li>
                                <p className='test'>
                                    <span className='bold'>OnCreation - </span>
                                    This event fires when a particle is created.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className='bold'>OnCollision - </span>
                                    This event fires when a particle collides. The collision event is not capped and fires each frame it is colliding. 
                                </p>
                            </li>
                            <li>
                                <p>
                                    <span className='bold'>OnMovement - </span>
                                    This event fires when a particle moves from its previous position.
                                </p>
                            </li>
                        </ul>
                    </>
                }/>,
            ]}/>,
            <Chapter title="Presets" sections={[
                <Section title="" items={
                    <p>
                        Presets can be found under 
                        &nbsp;<SpecialText type="path" content="More > Presets"/>.
                        If you hover over them 2 buttons appear.
                        Add copies over all attributes from the target preset.
                        Spawn spawns in the target preset in front of your cam.
                    </p>
                }/>,
            ]}/>,
        ]
    },
    optiloop: {
        title: "OptiLoop",
        description: `
            Optimized for and while loops.
        `,
        elements: [
            <Chapter title="Introduction" sections={[
                <Section items={
                    <p>
                        OptiLoop is for instancing for and while loops that run on runservice instead of roblox's default loops.
                    </p>
                }/>
            ]}/>,
        ]
    },
}

export default data;