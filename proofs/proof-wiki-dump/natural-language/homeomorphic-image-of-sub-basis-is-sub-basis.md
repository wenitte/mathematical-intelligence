# 

Source: https://proofwiki.org/wiki/Homeomorphic_Image_of_Sub-Basis_is_Sub-Basis

Theorem
Let $T_\alpha = \struct{X_\alpha, \tau_\alpha}, T_\beta = \struct{X_\beta, \tau_\beta}$ be topological spaces.
Let $\SS_\alpha \subseteq \tau_\alpha$ be a sub-basis for $\tau_\alpha$.

Let $\phi: T_\alpha \to T_\beta$ be a homeomorphism.
Let $\SS_\beta = \set{\phi \sqbrk S : S \in \SS_\alpha}$.

Then:

$\SS_\beta$ is a sub-basis for $\tau_\beta$


Proof
By definition of homeomorphism:

$\forall U \subseteq X_\alpha : U \in \tau_\alpha \iff \phi \sqbrk U \in \tau_\beta$
By definition of sub-basis:

$\SS_\alpha \subseteq \tau_\alpha$
Hence:

$\SS_\beta \subseteq \tau_\beta$

Let $\ds \BB_\alpha = \set {\bigcap \FF: \FF \subseteq \SS_\alpha, \FF \text{ is finite} }$.
Let $\ds \BB_\beta = \set {\bigcap \GG: \GG \subseteq \SS_\beta, \GG \text{ is finite} }$.

Let $B \in \BB_\alpha$.
By definition of $\BB_\alpha$:

$\exists \FF \subseteq \BB_\alpha : \FF \text{ is finite} : B = \bigcap \set{S : S \in \FF}$
We have:














\(\ds \phi \sqbrk B\)

\(=\)







\(\ds \phi \sqbrk {\bigcap \set{S : S \in \FF} }\)




















\(\ds \)

\(=\)







\(\ds \bigcap \set{\phi \sqbrk S : S \in \FF}\)





Image of Intersection under Injection




Let $\GG = \set{\phi \sqbrk S : S \in \FF}$.
Then:

$\GG \subseteq \BB_\beta : \GG \text{ is finite} : \phi \sqbrk B = \bigcap \GG$
Hence $\phi \sqbrk B \in \BB_\beta$.
We have shown that:

$(1): \quad \forall B \in \BB_\alpha : \phi \sqbrk B \in \BB_\beta$

Let $V \in \tau_\beta$.
From Inverse of Homeomorphism is Homeomorphism:

$\phi^{-1}$ is a homeomorphism
By definition of homeomorphism:

$\phi^{-1} \sqbrk V \in \tau_\alpha$

By definition of sub-basis:




\(\text {(2)}: \quad\)





\(\ds \exists \AA \subseteq \BB_\alpha: \, \)



\(\ds \phi^{-1} \sqbrk V\)

\(=\)







\(\ds \bigcup \AA\)










We have:














\(\ds V\)

\(=\)







\(\ds \phi \sqbrk {\phi^{-1} \sqbrk V}\)





Image of Preimage of Subset under Surjection equals Subset














\(\ds \)

\(=\)







\(\ds \phi \sqbrk {\bigcup \set{B : B \in \AA} }\)





From $(2)$ above














\(\ds \)

\(=\)







\(\ds \bigcup \set{\phi \sqbrk B : B \in \AA}\)





From Image of Union under Mapping




Let $\AA' = \set{\phi \sqbrk B : B \in \BB_\alpha}$
From $(1)$ above:

$\AA' \subseteq \BB_\beta$
We have:

$V = \bigcup \AA'$

Hence by definition, $\SS_\beta$ is a sub-basis for $\tau_\beta$
$\blacksquare$





