# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Metrizable_Topology/Lemma_1



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $M = \struct {A, d}$ be a metric space.
Let $\tau_d$ be the topology induced by $d$ on $A$.
Let $\phi: \struct {S, \tau} \to \struct {A, \tau_d}$ be a homeomorphism between $\struct {S, \tau}$ and $\struct {A, \tau_d}$.
Let $d_\phi: S \times S \to \R_{\ge 0}$ be the mapping defined by:

$\forall s, t \in S: \map {d_\phi} {s,t} = \map d {\map \phi s, \map \phi t}$

Then:

$d_\phi$ is a metric on $S$.


Proof
We note that by definition $d: M \to \R$ is a metric on $M$.
Hence $d$ satisfies all the metric space axioms.


$d_\phi$ satisfies Metric Space Axiom $(\text M 1)$
We have:










\(\ds \forall s \in S: \, \)



\(\ds \map {d_\phi} {s, s}\)

\(=\)







\(\ds \map d {\map \phi s, \map \phi s}\)





Definition of $d_\phi$














\(\ds \)

\(=\)







\(\ds 0\)





as $d$ satisfies Metric Space Axiom $(\text M 1)$



Hence $d_\phi$ satisfies Metric Space Axiom $(\text M 1)$.
$\Box$


$d_\phi$ satisfies Metric Space Axiom $(\text M 2)$: Triangle Inequality
We have:










\(\ds \forall s, t, u \in S: \, \)



\(\ds \map {d_\phi} {s, t}\)

\(=\)







\(\ds \map d {\map \phi s, \map \phi t}\)





Definition of $d_\phi$














\(\ds \)

\(\le\)







\(\ds \map d {\map \phi s, \map \phi u} + \map d {\map \phi u, \map \phi t}\)





as $d$ satisfies Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \map {d_\phi} {s, u} + \map {d_\phi} {u, t}\)





Definition of $d_\phi$



Hence $d_\phi$ satisfies Metric Space Axiom $(\text M 2)$: Triangle Inequality.
$\Box$


$d_\phi$ satisfies Metric Space Axiom $(\text M 3)$
We have:










\(\ds \forall s, t \in S: \, \)



\(\ds \map {d_\phi} {s, t}\)

\(=\)







\(\ds \map d {\map \phi s, \map \phi t}\)





Definition of $d_\phi$














\(\ds \)

\(=\)







\(\ds \map d {\map \phi t, \map \phi s}\)





as $d$ satisfies Metric Space Axiom $(\text M 3)$














\(\ds \)

\(=\)







\(\ds \map d {\map \phi t, \map \phi s}\)





Definition of $d_\phi$



Hence $d_\phi$ satisfies Metric Space Axiom $(\text M 1)$.
$\Box$


$d_\phi$ satisfies Metric Space Axiom $(\text M 4)$
By definition of homeomorphism:

$\phi$ is an injection
By definition of injection:

$\forall s, t \in S : s \ne t \implies \map \phi s \ne \map \phi t$

We have:










\(\ds \forall s, t \in S : s \ne t: \, \)



\(\ds \map {d_\phi} {s, t}\)

\(=\)







\(\ds \map d {\map \phi s, \map \phi t}\)





Definition of $d_\phi$














\(\ds \)

\(>\)







\(\ds 0\)





as $d$ satisfies Metric Space Axiom $(\text M 4)$




Hence $d_\phi$ satisfies Metric Space Axiom $(\text M 4)$.
$\Box$

It follows that $d_\phi$ is a metric on $S$ by definition.
$\blacksquare$





