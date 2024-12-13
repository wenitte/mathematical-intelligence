# 

Source: https://proofwiki.org/wiki/Peano_Structure_is_Unique

Theorem
Let $\struct {P, s, 0}$ and $\struct {P', s', 0'}$ be Peano structures.

Then there is a unique bijection $f: P \to P'$ such that:














\(\ds \map f 0\)

\(=\)







\(\ds 0'\)
















\(\ds \forall n \in P: \, \)



\(\ds \map f {\map s n}\)

\(=\)







\(\ds \map {s'} {\map f n}\)











Proof
First to establish uniqueness of $f$.
Suppose that $f, g: P \to P'$ both satisfy the conditions.
Define $A \subseteq P$ as:

$A := \set {n \in P: \map f n = \map g n}$
Then the first condition implies that $0 \in A$.

Now suppose that $n \in A$. Then:














\(\ds \map f {\map s n}\)

\(=\)







\(\ds \map {s'} {\map f n}\)





Assumption on $f$














\(\ds \)

\(=\)







\(\ds \map {s'} {\map g n}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \map g {\map s n}\)





Assumption on $g$



Hence $\map s n \in A$.
Since $P$ is a Peano structure, it follows that $A = P$.
Hence by Equality of Mappings, $f = g$.

For the existence of such an $f$, we apply the Principle of Recursive Definition with $0' \in P'$ and $s': P' \to P'$.

Lastly, it is to be established that the $f$ so obtained is a bijection.
Let $A' \subseteq P$ be defined as:

$A' := \set {n \in P: \forall m \in P: \map f n = \map f m \implies n = m}$
It follows from Axiom $(P4)$ that $\map f n = 0'$ implies $n = 0$.
Hence $0 \in A'$.
Suppose now that $n \in A'$, but $\map s n \notin A'$.
Then, since $\map f {\map s n} \ne 0'$, there exists some $m \in P, m \ne n$ such that:

$\map f {\map s n} = \map f {\map s m}$
That is, such that:

$\map {s'} {\map f n} = \map {s'} {\map f m}$
But by Axiom $(P3)$, $s'$ is injective.
Hence $\map f n = \map f m$, contradicting the assumption that $n \in A'$.
Therefore $\map s n \in A'$, so that $A' = P$ by Axiom $(P5)$.
That is, $f$ is an injection.

Next, define $A \subseteq P'$ as:

$A := \set {n' \in P': \exists n \in P: \map f n = n'}$
Since $\map f 0 = 0'$, we have $0' \in A$.
Suppose now that $n' \in A$, and let $\map f n = n'$.
Then:














\(\ds \map f {\map s n}\)

\(=\)







\(\ds \map {s'} {\map f n}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \map {s'} {n'}\)





Definition of $n$



meaning $\map {s'} {n'} \in A$.
Hence by Axiom $(P5)$, $A = P'$.
That is, $f$ is surjective.

It follows that $f$ is the sought bijection.
$\blacksquare$





