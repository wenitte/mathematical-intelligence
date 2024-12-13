# 

Source: https://proofwiki.org/wiki/Properties_of_Gr%C3%B6tzsch_and_Teichm%C3%BCller_Moduli


This page has been identified as a candidate for refactoring of basic complexity.In particular: 4 separate results -- page needed for each.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma
For any number $R > 1$, let the modulus of the Grötzsch annulus be denoted $\map M R$.


This article, or a section of it, needs explaining.In particular: What sort of number? Real, complex, integer?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then:

$\map M R = 2 \map M {\dfrac {1 + R} {2 \sqrt R} }$
Similarly, for any $R > 0$, let the modulus of the Teichmüller annulus be denoted $\map \Lambda R$.
Then:

$\map \Lambda R \cdot \map \Lambda {\dfrac 1 R} = \dfrac 1 4$
In particular:

$\map \Lambda 1 = \dfrac 1 2$
Furthermore, these two quantities are related by:

$\map M R = \map \Lambda {\dfrac {\paren {1 - R}^2} {4 R} }$
and:

$2 \map M R = \map \Lambda {R^2 - 1}$


Proof
We begin by proving the equation relating $\map \Lambda R$ and $\map \Lambda {\dfrac 1 R}$.
To do so, we consider the quadrilateral $\map Q R$ given by the upper half plane with the boundary arcs $\closedint {-1} 0$ and $\hointr R \infty$.
Then

$\map \mod {\map Q R} = 2 \map \Lambda R$
Now consider the quadrilateral $Q'$ that again consists of the upper half plane, but now with the boundary arcs $\hointl {-\infty} 0$ and $\closedint 0 R$.
Then:

$\map \mod {Q'} = \dfrac 1 {\map \mod {\map Q R} } = \dfrac 1 {2 \map \Lambda R}$
On the other hand, the function $z \mapsto \dfrac {-z} R$ takes $Q'$ conformally to $\map Q {\dfrac 1 R}$.


This article, or a section of it, needs explaining.In particular: Link to that result.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence, by Invariance of Extremal Length under Conformal Mappings:

$2 \map \Lambda {\dfrac 1 R} = \map \mod {Q'} = \dfrac 1 2 \map \Lambda R$
Rearranging yields the desired identity.

To prove the first equality (regarding $\map M R$), let $\map G R$ denote the Grötzsch annulus.
Consider the set

$U := \set {z \in \C: \cmod z > 1, z \notin \hointr {\sqrt R} \infty \text{ and } z \notin \hointl {-\infty} {\sqrt R} }$
Then $z \mapsto z^2$ maps $U$ to $\map G R$ as a covering map of degree $2$.
Hence

$\map M R = \map \mod {\map G R} = 2 \map \mod U$
On the other hand, the Möbius transformation:

$z \mapsto \dfrac {1 + \sqrt R z} {z + \sqrt R}$
is a conformal isomorphism between $U$ and $\map G {\dfrac {1 + R} {2 \sqrt R} }$.
The claim now follows again from Invariance of Extremal Length under Conformal Mappings.

To prove the first relation between the Teichmüller and Grötzsch moduli, observe that the Koebe Function:

$z \mapsto \dfrac z {\paren {1 + z}^2}$
maps $\map G R$ conformally onto the set:

$V := \C \setminus \paren {\hointr {\dfrac 1 4} \infty \cup \closedint 0 {\dfrac R {\paren {1 + R}^2} } }$
On the other hand, the Möbius transformation:

$z \mapsto z \cdot \dfrac {\paren {1 + R}^2} R - 1$
takes $V$ conformally onto the Teichmüller domain for:

$\dfrac 1 4 \cdot \dfrac {\paren {1 + R}^2} R - 1 = \dfrac {\paren {1 - R}^2} {4 R}$
So:

$\map M R = \map \Lambda {\dfrac {\paren {1 - R}^2} {4 R} }$
as claimed.

The second relation can be proved from the first, together with the property of $\map M R$ that we proved above.
Indeed, choose $Q$ such that:

$R = \dfrac {1 + Q} {2 \sqrt Q}$
This is possible because the right hand side is a strictly-increasing function from the interval $\hointr 1 \infty$ to itself.
Then:














\(\ds \map \Lambda {R^2 - 1}\)

\(=\)







\(\ds \map \Lambda {\dfrac {\paren {1 + Q}^2} {4 Q} - 1}\)




















\(\ds \)

\(=\)







\(\ds \map \Lambda {\dfrac {\paren {1 - Q}^2} {4 Q} }\)




















\(\ds \)

\(=\)







\(\ds \map M Q\)




















\(\ds \)

\(=\)







\(\ds 2 \map M R\)












This page has been identified as a candidate for refactoring of basic complexity.In particular: After this page has been split into four, add this as a second proof of whichever result this proves.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code. 
Alternatively, we can also prove the last equality directly: reflection of the Grötzsch annulus in the unit circle yields the set:

$W := \C \setminus \paren {\closedint 0 {\dfrac 1 R} \cup \hointr R \infty}$
It follows that:

$\map \mod W = 2 \map M R$
On the other hand, the map:

$z \mapsto R z - 1$
takes $W$ to the Teichmüller domain for $R^2 - 1$.
$\blacksquare$


Sources
1973: L.V. Ahlfors: Conformal Invariants: Topics in Geometric Function Theory




