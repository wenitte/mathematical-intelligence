# 

Source: https://proofwiki.org/wiki/Bijection_is_Open_iff_Closed



Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $f: T_1 \to T_2$ be a bijection.

Then $f$ is open if and only if $f$ is closed.


Proof
Let $f$ be a bijection.
Suppose $f$ is an open mapping.
From the definition of open mapping:

$\forall H \in \tau_1: f \sqbrk H \in \tau_2$
As $f$ is a bijection:

$f \sqbrk {S_1 \setminus H} = f \sqbrk {S_1} \setminus f \sqbrk H = S_2 \setminus f \sqbrk H$
By definition of closed set:

$S_1 \setminus H$ is closed in $T_1$
and as $f$ is an open mapping:

$f \sqbrk {S_1 \setminus H} = S_2 \setminus f \sqbrk H$
is closed in $T_2$.
Hence by definition $f$ is a closed mapping.

A similar argument demonstrates that if $f$ is closed then it is open.
$\blacksquare$


Also see
Bijection is Open iff Inverse is Continuous
Open Mapping is not necessarily Closed Mapping


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Functions




