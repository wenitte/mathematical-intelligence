# 

Source: https://proofwiki.org/wiki/Regular_Second-Countable_Space_is_Homeomorphic_to_Subspace_of_Hilbert_Cube/Lemma_2


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct {S, \tau}$ be a topological space which is regular and second-countable.

Let $\BB$ be a countable basis for $\tau$.

Let $\AA = \set{\tuple{U,V} : U, V \in \BB : U^- \subseteq V}$ where $U^-$ denotes the closure of $U$ in $T$.

For all $\tuple{U, V} \in \AA$, let:

$f_{U,V} : S \to \closedint 0 1$ be a Urysohn function for $U^-$ and $S \setminus V$

Then:

the family of continuous mappings $\family{f_{U,V}}_{\tuple{U,V} \in \AA}$ separates points from closed sets


Proof
Let $F$ be a closed subset of $T$.
Let $x \in S \setminus F$.

By definition of closed subset:

$S \setminus F$ is open in $S$
Let $V = S \setminus F$.
By definition of regular space:

$\exists U \in \tau: x \subseteq U, U^- \subseteq V$
Hence $\tuple{U, V} \in \AA$.

Consider the Urysohn function $f_{U, V}$ for $U^-$ and $S \setminus V$:
By definition of Urysohn function:

$f_{U, V} \sqbrk {U^-} = \set 0, f_{U, V} \sqbrk {S \setminus V} = \set 1$

Hence:

$\map {f_{U, V}} x = 0, f_{U, V} \sqbrk F = \set 1$

Since $\set 1^- = \set 1$, then:

$\map {f_{U, V}} x = 0 \notin \set 1 = f_{U, V} \sqbrk F^-$

By definition, the family of continuous mappings $\family{f_{U,V}}_{\tuple{U,V} \in \AA}$ separates points from closed sets
$\blacksquare$





