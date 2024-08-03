import React from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom';



import Descontos from '../src/pages/Descontos';
import Dashboard from '../src/pages/Dashboard';
import MVPProposal from '../src/pages/MVPProposal';
import CreateLead from '../src/pages/CreateLead';
import Vantagens from '../src/pages/Vantagens';
import Login from '../src/pages/Login';
import M3D from '../src/pages/m3d';
import M3DHome from '../src/pages/M3DHome';
import M3DProjeto from '../src/pages/M3DProjeto';
import ProposalAInterno from '../src/pages/ProposalAInterno';
import ProposalAExterno from '../src/pages/ProposalAExterno';
import ProposalAInternoExterno from '../src/pages/ProposalAInternoExterno';
import ProposalCInterno from '../src/pages/ProposalCInterno';
import ProposalCExterno from '../src/pages/ProposalCExterno';
import ProposalCInternoExterno from '../src/pages/ProposalCInternoExterno';

const port = process.env.PORT || 3000;

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" index element={<M3D />} />
      
        <Route path="/Descontos" element={<Descontos />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mvpproposals" element={<MVPProposal/>} />
        <Route path="/mvpproposals/aintern" element={<ProposalAInterno/>} />
        <Route path="/mvpproposals/aextern" element={<ProposalAExterno/>} />
        <Route path="/mvpproposals/ainextern" element={<ProposalAInternoExterno/>} />

        <Route path="/mvpproposals/cintern" element={<ProposalCInterno/>} />
        <Route path="/mvpproposals/cextern" element={<ProposalCExterno/>} />
        <Route path="/mvpproposals/cinextern" element={<ProposalCInternoExterno/>} />

        <Route path="/createlead" element={<CreateLead />} />
        <Route path="/vantagens" element={<Vantagens />} />
        <Route path="/login" element={<Login />} />
        <Route path="/m3d" element={<M3D/>} />
        <Route path="/m3dhome" element={<M3DHome/>} />
        <Route path="/m3dprojeto" element={<M3DProjeto/>} />
        
        
    </Routes>
</BrowserRouter>
  );
}

export default App;
