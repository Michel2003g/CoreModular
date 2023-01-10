import Chapter from '../components/documentationComponents/Chapter';
import Section from '../components/documentationComponents/Section';
import SpecialText from '../components/documentationComponents/SpecialText';

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
                            <SpecialText type="class" content="Basepart's"/>,
                            <SpecialText type="class" content="Meshpart's"/> or
                            <SpecialText type="class" content="Model's"/>
                        </p>
                    </>
                }/>,
                <Section title="Important Info" items={
                    <>
                        <p>
                        When the plugin is firstly installed, studio is opened or the plugin updates. 
                        3 scripts will be inserted into your place. 
                        2 of wich are to activate the particle system on 
                        <SpecialText type="class" content="Part's"/>,
                        <SpecialText type="class" content="Attachment's"/>
                         that share the collection tag 
                        <SpecialText type="string" content="ParticleSystem" />. The other one is the Meshparticle module itself. It can be found in 
                        <SpecialText type="path" content="game.ReplicatedStorage > ModulePack > Meshparticles" />
                        </p>
                    </>
                }/>
            ]}/>,
            <Chapter title="Plugin Installation" sections={[
                <Section title="How To Install" items={
                    <>
                        <p>
                            Go to 
                            <SpecialText type="link" content="https://www.roblox.com/library/11453345861/ParticlePlugin"/>
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
                            By selecting a
                            <SpecialText type="class" content="Part"/> or
                            <SpecialText type="class" content="Attachment"/>
                            and clicking the add button.
                            You will change your current selection into a particle system.
                            This applies to all selected objects that meet the class condition.
                        </p>
                    </>
                }/>,
                <Section title="Remove" items={
                    <>
                        <p>
                            By clicking the remove button all selected objects will be cleared of attributes and tags.
                        </p>
                    </>
                }/>
            ]}/>,
        ]
    },
}

export default data;