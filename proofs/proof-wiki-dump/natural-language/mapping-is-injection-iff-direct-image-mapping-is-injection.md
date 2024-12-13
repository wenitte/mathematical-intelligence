# 

Source: https://proofwiki.org/wiki/Mapping_is_Injection_iff_Direct_Image_Mapping_is_Injection



Theorem
Let $f: S \to T$ be a mapping.
Let $f^\to: \powerset S \to \powerset T$ be the direct image mapping of $f$.

Then:

$f^\to$ is an injection
if and only if

$f: S \to T$ is also an injection.


Proof
Necessary Condition
Suppose $f: S \to T$ is a mapping, but not injective.
Then:

$\exists x_1 \ne x_2 \in S: \map f {x_1} = \map f {x_2} = y$
Let:

$X_1 = \set {x_1}$
$X_2 = \set {x_2}$
$Y = \set y$
Then it follows that:

$\map {f^\to} {X_1} = \map {f^\to} {X_2} = Y$
Thus $f^\to: \powerset S \to \powerset T$ is not injective.
So by the Rule of Transposition, the result follows.
$\Box$


Sufficient Condition
Suppose $f^\to: \powerset S \to \powerset T$ is not an injection.
Then:

$\exists Y \in \powerset T: \exists X_1, X_2 \in \powerset S: X_1 \ne X_2 \land \map {f^\to} {X_1} = \map {f^\to} {X_2} = Y$

There are two cases to consider: 

$(1): \quad$ Either $X_1$ or $X_2$ is the empty set
$(2): \quad$ Neither $X_1$ nor $X_2$ is the empty set.

Without loss of generality assume that $X_1 = \O$.
Then, from Image of Empty Set is Empty Set:

$Y = \map {f^\to} {X_1} = \O$
But that means:

$\map {f^\to} {X_2} = \O$
Now $X_1 \ne X_2$, so $X_2 \ne \O$.
Thus:

$\exists x_2 \in X_2: \neg \exists y \in T: \map f {x_2} = y$
which means that $f$ is not even a mapping, let alone an injection.

The same argument applies if $X_2$ is empty.
$\Box$

Now, assume that neither $X_1$ nor $X_2$ is the empty set.
As $X_1 \ne X_2$, there must be at least one element in either one which is not in the other.
Without loss of generality assume that $\exists x_1 \in X_1: x_1 \notin X_2$.
Now suppose $\map f {x_1} = y \in Y$.
However, as $\map {f^\to} {X_2} = Y$, there must be some $x_2 \in X_2$ such that $\map f {x_2} = y \in Y$.
So:

$\exists x_1 \ne x_2 \in S: \map f {x_1} = \map f {x_2}$
which means, by definition, that $f$ is not injective.

Thus, if $f^\to: \powerset S \to \powerset T$ is not an injection then neither is $f: S \to T$.
Thus, by the Rule of Transposition, the result follows.
$\blacksquare$





