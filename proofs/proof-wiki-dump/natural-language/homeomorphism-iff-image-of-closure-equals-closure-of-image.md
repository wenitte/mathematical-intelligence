# 

Source: https://proofwiki.org/wiki/Homeomorphism_iff_Image_of_Closure_equals_Closure_of_Image

Definition
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $f: T_1 \to T_2$ be a bijection.

Then $f$ is a homeomorphism if and only if:

$\forall H \subseteq T_1: f \sqbrk {H^-} = \paren {f \sqbrk H}^-$
where $H^-$ denotes the closure of $H$.


Proof
From Bijection iff Inverse is Bijection, $f$ is a bijection if and only if $f^{-1}$ is a bijection.
From Continuity Defined by Closure we have that $f: T_1 \to T_2$ is continuous if and only if:

$\forall H \subseteq S_1: f \sqbrk {H^-} \subseteq \paren {f \sqbrk H}^-$
Similarly, $f^{-1}: T_2 \to T_1$ is continuous if and only if:

$\forall H \subseteq S_2: f^{-1} \sqbrk {H^-} \subseteq \paren {f^{-1} \sqbrk H}^-$
Thus:

$\forall H \subseteq S_1: f \sqbrk {\paren {f^{-1} \sqbrk H}^-} \subseteq \paren {f \sqbrk {f^{-1} \sqbrk H} }^-$
That is:

$\forall H \subseteq S_1: f \sqbrk {\paren {f^{-1} \sqbrk H}^-} \subseteq H^-$
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Functions




