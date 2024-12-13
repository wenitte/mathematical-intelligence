# 

Source: https://proofwiki.org/wiki/Min_Operation_is_Commutative

Theorem
The Min operation is commutative:

$\map \min {x, y} = \map \min {y, x}$


Proof
To simplify our notation:

Let $\map \min {x, y}$ be (temporarily) denoted $x \underline \vee y$.

There are three cases to consider:

$(1): \quad x \le y$
$(2): \quad y \le x$
$(3): \quad x = y$

$(1): \quad$ Let $x \le y$.
Then:














\(\ds x \underline \vee y\)

\(=\)







\(\ds x\)

\(\ds =y \underline \vee x\)








$(2): \quad$ Let $y \le x$.
Then:














\(\ds x \underline \vee y\)

\(=\)







\(\ds y\)

\(\ds =y \underline \vee x\)








$(3): \quad$ Let $x = y$.
Then:














\(\ds x \underline \vee y\)

\(=\)







\(\ds x = y\)

\(\ds =y \underline \vee x\)








Thus $\underline \vee$, i.e. $\min$, has been shown to be commutative in all cases.
$\blacksquare$


Also see
Max Operation is Commutative




