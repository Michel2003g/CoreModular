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
            <Chapter title="Plugin Installation" sections={[
                <Section title="Introduction" items={
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
                <Section title="How To Install" items={
                    <>
                        <p>
                            Go to 
                            <SpecialText type="link" content="https://www.roblox.com/library/11453345861/ParticlePlugin"/>
                            And click on the install button to install the plugin.
                        </p>
                        <p>
                            Go to 2
                            <SpecialText type="link" content="https://www.roblox.com/library/11453345861/ParticlePlugin"/>
                            And click on the install button to install the plugin.
                        </p>
                    </>
                }/>
            ]}/>,
        ]
    },
}

export default data;