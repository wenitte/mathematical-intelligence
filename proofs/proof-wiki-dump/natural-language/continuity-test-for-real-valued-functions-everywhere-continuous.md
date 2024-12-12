# 

Source: https://proofwiki.org/wiki/Continuity_Test_for_Real-Valued_Functions/Everywhere_Continuous

Theorem
Let $\struct{S, \tau}$ be a topological space.
Let $f: S \to \R$ be a real-valued function.
Then $f$ is everywhere continuous if and only if:

$\forall x \in S : \forall \epsilon \in \R_{>0} : \exists U \in \tau : x \in U : \map {f^\to} U \subseteq \openint {\map f x - \epsilon} {\map f x + \epsilon}$


Proof
By definition, $f$ is everywhere continuous if and only if $f$ is continuous at every point $x \in S$.
From Continuity Test for Real-Valued Functions, $f$ is continuous at every point $x \in S$ if and only if:

$\forall x \in S : \forall \epsilon \in \R_{>0} : \exists U \in \tau : x \in U : \map {f^\to} U \subseteq \openint {\map f x - \epsilon} {\map f x + \epsilon}$
$\blacksquare$





