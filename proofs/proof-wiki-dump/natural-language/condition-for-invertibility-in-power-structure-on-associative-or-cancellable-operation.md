# 

Source: https://proofwiki.org/wiki/Condition_for_Invertibility_in_Power_Structure_on_Associative_or_Cancellable_Operation



Theorem
Let $\struct {S, \circ}$ be a magma.
Let $\struct {\powerset S, \circ_\PP}$ denote the power structure of $\struct {S, \circ}$.
Let identity element $e \in S$ be an identity element of $\struct {S, \circ}$.
Let $\circ$ be either:

an associative operation
a cancellable operation.

Let $X \subseteq S$ be a subset of $S$.
Then:

$X$ is invertible for $\circ_PP$
if and only if:

there exists an element $x \in S$ which is invertible for $\circ$ such that $X = \set x$.


Proof
First we note that from Identity Element for Power Structure, the algebraic structure $\struct {\powerset S, \circ_\PP}$ has an identity element $J = \set e$.


Sufficient Condition
Let $X$ be invertible for $\circ_PP$.
Then:










\(\ds \exists Y \in \powerset S: \, \)



\(\ds X \circ_\PP Y\)

\(=\)







\(\ds J\)





Definition of Invertible Element








\(\ds \leadsto \ \ \)





\(\ds \set {x \circ y: x \in X, y \in Y}\)

\(=\)







\(\ds \set e\)





Definition of Operation Induced on Power Set








\(\ds \leadsto \ \ \)

\(\ds \exists x \in X: \exists y \in S: \, \)



\(\ds x \circ y\)

\(=\)







\(\ds e\)










Similarly:










\(\ds \exists Y \in \powerset S: \, \)



\(\ds Y \circ_\PP X\)

\(=\)







\(\ds J\)





Definition of Invertible Element








\(\ds \leadsto \ \ \)





\(\ds \set {y \circ x: x \in X, y \in Y}\)

\(=\)







\(\ds \set e\)





Definition of Operation Induced on Power Set








\(\ds \leadsto \ \ \)

\(\ds \exists x \in X: \exists y \in S: \, \)



\(\ds y \circ x\)

\(=\)







\(\ds e\)









That is, there exists $x \in X$ such that:

$x \circ y = e = y \circ x$
That is:

$x$ is invertible for $\circ$
$y$ is the inverse of $x$.

Hence we have $Y \in \powerset S$ such that:

$\forall y \in Y: x \circ y = e = y \circ x$


$\circ$ is Associative
Let $\circ$ be an associative operation.
Aiming for a contradiction, suppose $\exists z \in X$ such that $z \ne x$.
Then we have:

$\forall y \in Y: z \circ y = e = y \circ z$















\(\ds z \circ e\)

\(=\)







\(\ds z\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds z \circ \paren {y \circ x}\)

\(=\)







\(\ds z\)














\(\ds \leadsto \ \ \)





\(\ds \paren {z \circ y} \circ x\)

\(=\)







\(\ds z\)





as $\circ$ is associative








\(\ds \leadsto \ \ \)





\(\ds e \circ x\)

\(=\)







\(\ds z\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds z\)









This contradicts our supposition that $z \ne x$.
Hence there can be no elements in $X$ apart from $x$.
That is:

$X = \set x$
where $x$ is invertible for $\circ$.
$\Box$


$\circ$ is Cancellable
Let $\circ$ be a cancellable operation.
Aiming for a contradiction, suppose $\exists z \in X$ such that $z \ne x$.
Then we have:

$\forall y \in Y: z \circ y = e = y \circ z$
Then:














\(\ds x \circ y\)

\(=\)







\(\ds z \circ y\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds z\)





as $\circ$ is cancellable



This contradicts our supposition that $z \ne x$.
Hence there can be no elements in $X$ apart from $x$.
That is:

$X = \set x$
where $x$ is invertible for $\circ$.
$\Box$


Necessary Condition
Let there exist an element $x \in S$ which is invertible for $\circ$.
Hence there exist $y \in S$ such that:

$x \circ y = e = y \circ x$
Let $X = \set x$.
We have:














\(\ds X \circ \set y\)

\(=\)







\(\ds \set {x \circ y}\)




















\(\ds \)

\(=\)







\(\ds \set e\)




















\(\ds \)

\(=\)







\(\ds J\)









and:














\(\ds \set y \circ X\)

\(=\)







\(\ds \set {y \circ x}\)




















\(\ds \)

\(=\)







\(\ds \set e\)




















\(\ds \)

\(=\)







\(\ds J\)









That is, $X$ is invertible for $\circ_\PP$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 9$: Compositions Induced on the Set of All Subsets: Exercise $9.7 \ \text {(c)}$




