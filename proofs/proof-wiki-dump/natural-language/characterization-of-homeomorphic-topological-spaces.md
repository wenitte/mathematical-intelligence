# 

Source: https://proofwiki.org/wiki/Characterization_of_Homeomorphic_Topological_Spaces


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T_1 = \struct{S_1, \tau_1}$ be topological space.

Let $S_2$ be a set.
Let $\tau_2$ be a subset of the powerset $\powerset {S_2}$.

Then:

$\struct{S_2, \tau_2}$ is a topological space homeomorphic to $T_1$
if and only if:

there exists a mapping $f : S_1 \to S_2$:
$(1)\quad f$ is a bijection
$(2)\quad f^\to \restriction_{\tau_1}$ is a surjection from $\tau_1$ to $\tau_2$
where
$f^\to \restriction_{\tau_1}$ denotes the restriction of $f^\to$ to $\tau_1$
$f^\to$ denotes the direct image mapping of $f$


Proof
Necessary Condition
Let $\struct{S_2, \tau_2}$ be a topological space homeomorphic to $T_1$.
Let $f: S_1 \to S_2$ be a homeomorphism.

By definition of a homeomorphism:

$f$ is a bijection
$f$ is an open mapping
$f$ is a continuous mapping

By definition of an open mapping:

$\forall U \in \tau_1 : f \sqbrk U \in \tau_2$
By definition of direct image mapping:

$\forall U \in \tau_1 : \map {f^\to} U \in \tau_2$

By definition of continuous mapping:

$\forall V \in \tau_2 : f^{-1} \sqbrk V \in \tau_1$
We have:










\(\ds \forall V \in \tau_2: \, \)



\(\ds \map {f^\to} {f^{-1} \sqbrk V}\)

\(=\)







\(\ds f \sqbrk {f^{-1} \sqbrk V}\)





Definition of Direct Image Mapping














\(\ds \)

\(=\)







\(\ds \map {\paren{f \circ f^{-1} } } V\)





Definition of Composite Mapping














\(\ds \)

\(=\)







\(\ds V\)





Image of Preimage of Subset under Surjection equals Subset




It follows that $f^\to \restriction_{\tau_1}$ is a surjection from $\tau_1$ to $\tau_2$.
$\Box$


Sufficient Condition
Let $f : S_1 \to S_2$ be a mapping such that:

$(1)\quad f$ is a bijection
$(2)\quad f^\to \restriction_{\tau_1}$ is a surjection from $\tau_1$ to $\tau_2$

From Direct Image Mapping is Bijection iff Mapping is Bijection

$f^\to$ is a bijection
From Restriction of Injection is Injection:

$f^\to \restriction_{\Sigma_L}$ is an injection

Hence $f^\to \restriction_{\Sigma_L}$ is a bijection onto $\Sigma'_L$.


$\tau_2$ satisfies Open Set Axiom $(\text O 1)$
Let $\set{V_i : i \in I} \subseteq \tau_2$ be an indexed family of sets of $\tau_2$.

By definition of a bijection:

$\forall i \in I : \exists U_i \in \tau_1 : \map {f^\to} {U_i} = V_i$

By Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets:

$\bigcup_{i \in I}  U_i \in \tau_1$

We have:














\(\ds \bigcup_{i \in I} V_i\)

\(=\)







\(\ds \bigcup_{i \in I} \map {f^\to} {U_i}\)




















\(\ds \)

\(=\)







\(\ds \map {f^\to} {\bigcup_{i \in I}  U_i}\)





Image of Union under Mapping














\(\ds \)

\(\in\)







\(\ds \tau_2\)





by hypothesis $f^\to \restriction_{\tau_1}$ is a bijection from $\tau_1$ to $\tau_2$




It follows that $\tau_2$ satisfies Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets.
$\Box$


$\tau_2$ satisfies Open Set Axiom $(\text O 2)$
Let $V_1, V_2 \in \tau_2$.

By definition of a bijection:

$\forall i \in I : \exists U_1, U_2 \in \tau_1 : \map {f^\to} {U_1} = V_1, \map {f^\to} {U_2} = V_2$

By Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets:

$U_1 \cap U_2 \in \tau_1$

We have:














\(\ds V_1 \cap V_2\)

\(=\)







\(\ds \map {f^\to} {U_1} \cap \map {f^\to} {U_1}\)




















\(\ds \)

\(=\)







\(\ds \map {f^\to} {U_1 \cap U_2}\)





Image of Intersection under Injection














\(\ds \)

\(\in\)







\(\ds \tau_2\)





by hypothesis $f^\to \restriction_{\tau_1}$ is a bijection from $\tau_1$ to $\tau_2$




It follows that $\tau_2$ satisfies Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets.
$\Box$


$\tau_2$ satisfies Open Set Axiom $(\text O 3)$
By Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology:

$S_1 \in \tau_1$

We have:














\(\ds S_2\)

\(=\)







\(\ds \map {f^\to} {S_1}\)





Definition of Bijection applied to $f$














\(\ds \)

\(\in\)







\(\ds \tau_2\)





by hypothesis $f^\to \restriction_{\tau_1}$ is a bijection from $\tau_1$ to $\tau_2$




It follows that $\tau_2$ satisfies Open Set Axiom $\paren {\text O 3 }$: Underlying Set is Element of Topology.
$\Box$

$\tau_2$ is a Topology
We have shown that $\tau_2$ satisfies the open set axioms.
Hence $\struct{S_2, \tau_2}$ is a topological space by definition.
$\Box$


$f$ is an Open Mapping
We have by hypothesis:

$f^\to \restriction_{\tau_1}$ is a bijection from $\tau_1$ to $\tau_2$
By definition of mapping:

$\forall U \in \tau_1 : \map {f^\to} U \in \tau_2$
By definition of direct image mapping:

$\forall U \in \tau_1 : f \sqbrk U \in \tau_2$
It follows that $f$ is an open mapping by definition.
$\Box$


$f$ is a Continuous Mapping
We have by hypothesis:

$f$ is a bijection from $S_1$ to $S_2$.
From [[Mapping is Bijection iff Direct Image Mapping is Bijection:

$f^\to$ is a bijection from $\powerset {S_1}$ to $\powerset {S_2}$

We have by hypothesis:

$f^\to \restriction_{\tau_1}$ is a bijection from $\tau_1$ to $\tau_2$

From Inverse of Bijection is Bijection:

$\paren{f^\to \restriction_{\tau_1} }^{-1}$ is a bijection from $\tau_2$ to $\tau_1$
From Restriction of Inverse is Inverse of Restriction:

$\paren{f^\to}^{-1} \restriction_{\tau_2}$ is a bijection from $\tau_2$ to $\tau_1$

From Inverse Image Mapping of Bijection is Inverse of Direct Image Mapping:

$f^\gets \restriction_{\tau_2}$ is a bijection from $\tau_2$ to $\tau_1$

By definition of mapping:

$\forall V \in \tau_2 : \map {f^\gets} V \in \tau_1$
By definition of inverse image mapping:

$\forall V \in \tau_2 : f^{-1} \sqbrk V \in \tau_1$

It follows that $f$ is a continuous mapping by definition.
$\Box$

It follows that $f$ is a homeomorphism and $\struct{S_2, \tau_2}$ is a topological space homeomorphic to $T_1$.
$\blacksquare$





