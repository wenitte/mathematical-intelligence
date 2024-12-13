# 

Source: https://proofwiki.org/wiki/Joins_of_Homeomorphic_Spaces_are_Homeomorphic

Theorem
Let $X, Y, X', Y'$ be topological spaces.
Suppose that:

$X \sim X'$
$Y \sim Y'$
where $\sim$ denotes homeomorphic spaces.

Then:

$(X \ast Y) \sim (X' \ast Y')$
where $\ast$ denotes the join.


Proof
By definition of homeomorphic, let:

$\phi_X : X \to X'$
$\phi_Y : Y \to Y'$
be homeomorphisms.
Additionally, let:

$I_{\closedint 0 1} : \closedint 0 1 \to \closedint 0 1$
be the identity mapping.
By Identity Mapping is Homeomorphism, we have that $I_{\closedint 0 1}$ is a homeomorphism.

Let $\phi : X \times Y \times \closedint 0 1 \to X' \times Y' \times \closedint 0 1$ be defined as:

$\map \phi {x, y, t} = \tuple {\map {\phi_X} x, \map {\phi_Y} y, \map {I_{\closedint 0 1} } t}$
By Products of Homeomorphic Spaces are Homeomorphic:

$\phi$ is a homeomorphism.

Consider the equivalence relations:

$\RR \subseteq \paren {X \times Y \times \closedint 0 1}^2$
$\RR' \subseteq \paren {X' \times Y' \times \closedint 0 1}^2$
each induced by the mapping:

$\map R {x, y, t} = \begin{cases} x & : t = 0 \\ \tuple {x, y, t} & : t \in \openint 0 1 \\ y & : t = 1 \end{cases}$
which is taken over the corresponding domain and codomain as in the definition of join.

By Quotients of Homeomorphic Spaces are Homeomorphic, the result will follow if we can show:

$\forall a, b \in X \times Y \times \closedint 0 1: \map \RR {a, b} \iff \map {\RR'} {\map \phi a, \map \phi b}$
By definition of the induced relation, it suffices to show that:

$\map R {x, y, t} = \map R {x', y', t'} \iff \map R {\map {\phi_X} x, \map {\phi_Y} y, t} = \map R {\map {\phi_X} {x'}, \map {\phi_Y} {y'}, t'}$
We have:














\(\ds \map R {x, y, t} = \map R {x', y', t'}\)

\(\iff\)







\(\ds \paren {x = x' \land t = t' = 0}\)




















\(\ds \)

\(\)





\(\, \ds \lor \, \)

\(\ds \paren {x = x' \land y = y' \land t = t' \in \openint 0 1}\)




















\(\ds \)

\(\)





\(\, \ds \lor \, \)

\(\ds \paren {y = y' \land t = t' = 1}\)





Definition of $R$














\(\ds \)

\(\iff\)







\(\ds \paren {\map {\phi_X} x = \map {\phi_X} {x'} \land t = t' = 0}\)




















\(\ds \)

\(\)





\(\, \ds \lor \, \)

\(\ds \paren {\map {\phi_X} x = \map {\phi_X} {x'} \land \map {\phi_Y} y = \map {\phi_Y} {y'} \land t = t' \in \openint 0 1}\)




















\(\ds \)

\(\)





\(\, \ds \lor \, \)

\(\ds \paren {\map {\phi_Y} y = \map {\phi_Y} {y'} \land t = t' = 1}\)





as $\phi_X$ and $\phi_Y$ are bijections














\(\ds \)

\(\iff\)







\(\ds \map R {\map {\phi_X} x, \map {\phi_Y} y, t} = \map R {\map {\phi_X} {x'}, \map {\phi_Y} {y'}, t'}\)










Therefore, by the remarks above:


This article, or a section of it, needs explaining.In particular: Which "remarks above"? Best to refer back to earlier statements by label.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\paren {X \ast Y} \sim \paren {X' \ast Y'}$
$\blacksquare$





