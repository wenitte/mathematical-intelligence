# 

Source: https://proofwiki.org/wiki/Regular_Second-Countable_Space_is_Homeomorphic_to_Subspace_of_Hilbert_Cube


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct {S, \tau}$ be a topological space which is regular and second-countable.

Then $T$ is homeomorphic to a subspace of the Hilbert cube.


Proof
From Second-Countable Space is Lindelöf: 

$T$ is a Lindelöf space
From Regular Lindelöf Space is Normal Space:

$T$ is a normal space

By definition of second-countable:

there exists a countable basis $\BB$ for $\tau$

Let:

$\AA = \set{\tuple{U,V} : U, V \in \BB : U^- \subseteq V}$
where $U^-$ denotes the closure of $U$ in $T$.

Lemma 1
$\AA$ is countable
$\Box$

From Urysohn's Lemma:

for all $\tuple{U, V} \in \AA$ there exists a Urysohn function $f_{U,V} : S \to \closedint 0 1$ for $U^-$ and $S \setminus V$
By definition of Urysohn function:

$\forall \tuple{U,V}\in \AA : f_{U,V}$ is continuous
Lemma 2
the family of continuous mappings $\family{f_{U,V}}_{\tuple{U,V} \in \AA}$ separates points from closed sets
$\Box$

Let $\closedint 0 1^\AA$ be the product space of countable copies of $\closedint 0 1$ indexed by $\AA$, that is:

$I^\AA = \ds \prod_{\tuple{U, V} \in \AA} \closedint 0 1$

Let $f: S \to \closedint 0 1^\AA$ be the evaluation mapping induced by the family $\family{f_{U,V}}_{\tuple{U, V} \in \AA}$.
That is, $f$ is the mapping defined by:

$\forall s \in S: \map f s = \family{\map {f_{U,V}} s}_{\tuple{U,V}\in \AA}$
From Topological Evaluation Mapping is Continuous:

$f$ is continuous

From Evaluation Mapping on T1 Space is Embedding if Mappings Separate Points from Closed Sets:

$f$ is an embedding
By definition of embedding:

$T$ is homeomorphic to a subspace of $I^\AA$

From Hilbert Cube is Homeomorphic to Countable Infinite Product of Real Number Unit Intervals:

$I^\AA$ is homeomorphic to the Hilbert cube $\struct{I^\omega, d_2}$
where $d_2$ is a metric

From Composite of Homeomorphisms is Homeomorphism:

$T$ is homeomorphic to a subspace of the Hilbert cube $\struct{I^\omega, d_2}$
$\blacksquare$


Sources
1955: John L. Kelley: General Topology: Chapter $4$: Embedding and Metrization
1970: Stephen Willard: General Topology: Chapter $7$: Metrizable Spaces: $\S23$: Metrization: Definition $23.1$




