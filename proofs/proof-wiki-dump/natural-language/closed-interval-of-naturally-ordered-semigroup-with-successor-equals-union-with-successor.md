# 

Source: https://proofwiki.org/wiki/Closed_Interval_of_Naturally_Ordered_Semigroup_with_Successor_equals_Union_with_Successor

Theorem
Let $\struct {S, \circ, \preceq}$ be a naturally ordered semigroup.

Then:

$\forall m, n \in \struct {S, \circ, \preceq}: m \preceq n \implies \closedint m {n \circ 1} = \closedint m n \cup \set {n \circ 1}$
where $\closedint m n$ is the closed interval between $m$ and $n$.


Proof
Let $m \preceq n$. Then:














\(\ds \)

\(\)







\(\ds x \in \closedint m {n \circ 1}\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds m \preceq x \land x \preceq \paren {n \circ 1}\)





Definition of Closed Interval














\(\ds \)

\(\leadstoandfrom\)







\(\ds m \preceq x \land \paren {x \prec n \circ 1 \lor x = n \circ 1}\)





Definition of Strictly Precede


















\(\ds \)

\(\)







\(\ds x \in \closedint m n \cup \set {n \circ 1}\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds m \preceq x \land \paren {x \preceq n \lor x = n \circ 1}\)





Definition of Closed Interval and Definition of Set Union














\(\ds \)

\(\leadstoandfrom\)







\(\ds m \preceq x \land \paren {x \prec n \lor x = n \lor x = n \circ 1}\)





Definition of Strictly Precede














\(\ds \)

\(\leadstoandfrom\)







\(\ds m \preceq x \land \paren {x \prec n \circ 1 \lor x = n \circ 1}\)





Definition of Strictly Precede




Thus:

$\closedint m {n \circ 1} = \closedint m n \cup \set {n \circ 1}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Corollary $16.4.2$




