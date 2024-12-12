# 

Source: https://proofwiki.org/wiki/Completion_Theorem_(Measure_Space)



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.

Then there exists a completion $\struct {X, \Sigma^*, \bar \mu}$ of $\struct {X, \Sigma, \mu}$.


Proof
We give an explicit construction of $\struct {X, \Sigma^*, \bar \mu}$.

To this end, define $\NN$ to be the collection of subsets of $\mu$-null sets:

$\NN := \set {N \subseteq X: \exists M \in \Sigma: \map \mu M = 0, N \subseteq M}$
Now, we define:

$\Sigma^* := \set {E \cup N: E \in \Sigma, N \in \NN}$
and assert $\Sigma^*$ is a $\sigma$-algebra.

By Empty Set is Null Set, $\O \in \NN$, and thus by Union with Empty Set:

$\forall E \in \Sigma: E \cup \O = E \in \Sigma^*$
that is to say, $\Sigma \subseteq \Sigma^*$.
As a consequence, $X \in \Sigma^*$.

Now, suppose that $E \cup N \in \Sigma^*$, and $N \subseteq M, M \in \Sigma$. Then:














\(\ds X \setminus \paren {E \cup N}\)

\(=\)







\(\ds \paren {X \setminus E} \cap \paren {X \setminus N}\)





De Morgan's Laws: Difference with Union














\(\ds \)

\(=\)







\(\ds \paren {X \setminus E} \cap \paren {\paren {X \setminus M} \cup \paren {M \setminus N} }\)





Union of Relative Complements of Nested Subsets














\(\ds \)

\(=\)







\(\ds \paren {\paren {X \setminus E} \cap \paren {X \setminus M} } \cup \paren {\paren {X \setminus E} \cap \paren {M \setminus N} }\)





Intersection Distributes over Union














\(\ds \)

\(\)







\(\ds \)






















\(\ds \paren {\paren {X \setminus E} \cap \paren {X \setminus M} }\)

\(\in\)







\(\ds \Sigma\)





$E, M \in \Sigma$, Sigma-Algebra Closed under Intersection














\(\ds \paren {X \setminus E} \cap \paren {M \setminus N}\)

\(\subseteq\)







\(\ds M\)





Set Difference is Subset, Set Intersection Preserves Subsets








\(\ds \leadsto \ \ \)





\(\ds X \setminus \paren {E \cup N}\)

\(\in\)







\(\ds \Sigma^*\)










Finally, let $\sequence {E_n}_{n \mathop \in \N}$ and $\sequence {N_n}_{n \mathop \in \N}$ be sequences in $\Sigma$ and $\NN$, respectively.
Let $\sequence {M_n}_{n \mathop \in \N}$ be a sequence of $\mu$-null sets such that:

$\forall n \in \N: N_n \subseteq M_n$
Then, compute:














\(\ds \bigcup_{n \mathop \in \N} \paren {E_n \cup N_n}\)

\(=\)







\(\ds \paren {\bigcup_{n \mathop \in \N} E_n} \cup \paren {\bigcup_{n \mathop \in \N} N_n}\)





Set Union is Self-Distributive: Families of Sets














\(\ds \bigcup_{n \mathop \in \N} N_n\)

\(\subseteq\)







\(\ds \bigcup_{n \mathop \in \N} M_n\)





Set Union Preserves Subsets



From Null Sets Closed under Countable Union, also:

$\ds \map \mu {\bigcup_{n \mathop \in \N} M_n} = 0$
hence it follows that:

$\ds \bigcup_{n \mathop \in \N} N_n \in \NN$

Next, as $\Sigma$ is a $\sigma$-algebra, it follows that:

$\ds \bigcup_{n \mathop \in \N} E_n \in \Sigma$
and finally, we conclude:

$\ds \bigcup_{n \mathop \in \N} \paren {E_n \cup N_n} \in \Sigma^*$

Therefore, we have shown that $\Sigma^*$ is a $\sigma$-algebra.

Next, define $\bar \mu: \Sigma^* \to \overline{\R}_{\ge 0}$ by:

$\map {\bar \mu} {E \cup N} := \map \mu E$
It needs verification that this well-defines $\bar \mu$.


Lemma
The mapping $\bar \mu$ is well-defined, i.e.:

$\forall E, F \in \Sigma: \forall N, M \in \NN: E \cup N = F \cup M \implies \map \mu E = \map \mu F$
$\Box$

Next, let us verify that $\bar \mu$ is a measure.
From Union with Empty Set, we have $\O \cup \O = \O$, so by Empty Set is Null Set:

$\map {\bar \mu} \O = \map \mu \O = 0$

For a sequence of pairwise disjoint sets $\sequence {E_n \cup N_n}_{n \mathop \in \N}$ in $\Sigma^*$, compute:














\(\ds \map {\bar \mu} {\bigcup_{n \mathop \in \N} \paren {E_n \cup N_n} }\)

\(=\)







\(\ds \map {\bar \mu} {\paren {\bigcup_{n \mathop \in \N} E_n} \cup \paren {\bigcup_{n \mathop \in \N} N_n} }\)





Set Union is Self-Distributive: Families of Sets














\(\ds \)

\(=\)







\(\ds \map \mu {\bigcup_{n \mathop \in \N} E_n}\)





Definition of $\bar \mu$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} \map \mu {E_n}\)





$\mu$ is a measure














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} \map {\bar \mu} {E_n \cup N_n})\)





Definition of $\bar \mu$



Thus, $\bar \mu$ is a measure.

Since for all $E \in \Sigma$ trivially:

$\map {\bar \mu} E = \map \mu E$
if $\struct {X, \Sigma^*, \bar \mu}$ is a complete measure space, it also completes $\struct {X, \Sigma, \mu}$.

So suppose that $E \cup N \in \Sigma^*$ is a $\bar \mu$-null set.
Suppose that $N \subseteq M$, with $M$ a $\mu$-null set.
Then by Set Union Preserves Subsets, we have:

$E \cup N \subseteq E \cup M$
and from $0 = \map {\bar \mu} {E \cup N} = \map \mu E$, $E$ is also a $\mu$-null set.
Hence by Null Sets Closed under Union, $E \cup M$ is a $\mu$-null set.

Therefore, for any $E' \in \Sigma^*$ with $E' \subseteq E \cup N$, we also have by Subset Relation is Transitive:

$E' \subseteq E \cup M$
whence $E' \in \NN$, and this means that (by Union with Empty Set):

$\map {\bar \mu} {E'} = \map {\bar \mu} {\O \cup E'} = \map \mu \O = 0$

So, any subset of $E \cup N$ is again a $\bar \mu$-null set.
That is, $\struct {X, \Sigma^*, \bar \mu}$ is complete.

It follows that $\struct {X, \Sigma^*, \bar \mu}$ completes $\struct {X, \Sigma, \mu}$.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 4$: Problem $13$




