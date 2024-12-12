# 

Source: https://proofwiki.org/wiki/Characterization_of_Homeomorphic_Topological_Spaces/Necessary_Condition


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T_1 = \struct{S_1, \tau_1}$ be topological space.

Let $S_2$ be a set.
Let $\tau_2$ be a subset of the powerset $\powerset {S_2}$.

Let $\struct{S_2, \tau_2}$ be a topological space homeomorphic to $T_1$.

Then:

there exists a mapping $f : S_1 \to S_2$:
$(1)\quad f$ is a bijection
$(2)\quad f^\to \restriction_{\tau_1}$ is a bijection from $\tau_1$ to $\tau_2$
where
$f^\to \restriction_{\tau_1}$ denotes the restriction of $f^\to$ to $\tau_1$
$f^\to$ denotes the direct image mapping of $f$


Proof
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

$\blacksquare$





