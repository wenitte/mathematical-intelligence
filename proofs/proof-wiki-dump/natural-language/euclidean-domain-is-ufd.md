# 

Source: https://proofwiki.org/wiki/Euclidean_Domain_is_UFD



Theorem
Let $\struct {D, +, \times}$ be a Euclidean domain.
Then $\struct {D, +, \times}$ is a unique factorization domain.


Proof
By the definition of unique factorization domain, we need to show that:

For all $x \in D$ such that $x$ is non-zero and not a unit of $D$:

$(1): \quad x$ has a complete factorization in $D$
$(2): \quad$ Any two complete factorizations of $x$ in $D$ are equivalent.


Proof of Existence
Proof by Complete Induction:
Let $\nu$ be the Euclidean valuation function on $D$.
For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

every $x \in D$ such that $\map \nu x = n$ is either a unit of $D$ or has a complete factorization in $D$.
That is, it can be written as the product of a finite number of irreducible elements.


Basis for the Induction
If $\map \nu x = \map \nu 1$ then $x$ is a unit of $D$.
So $\map P n$ is true for $n = \map \nu 1$.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true for all values of $k < \map \nu x$, then it logically follows that $\map P n$ is true.
So this is our induction hypothesis:

Every $x \in D$ such that $\map \nu x < n$ is either a unit of $D$ or can be written as the product of a finite number of irreducible elements.

Then we need to show:

Every $x \in D$ such that $\map \nu x = n$ is either a unit of $D$ or can be written as the product of a finite number of irreducible elements.


Induction Step
This is our induction step:

Suppose $x \in D$ such that $\map \nu x = n > \map \nu 1$.
If $x$ is irreducible, then it is the product of a finite number (that is, $1$) of irreducible elements.
If not, then $x = y z$, where neither $b$ nor $c$ are either unit of $D$ or irreducible.
By Euclidean Valuation of Non-Unit is less than that of Product we have that:

$\map \nu y < \map \nu x$ and $\map \nu z < \map \nu x$
By the induction hypothesis, we assume the truth of $\map P n$ for all values of $n < \map \nu x$.
Hence we know that both $y$ and $z$ can be written as the product of a finite number of irreducible elements.
Thus we may deduce the same about $x$.

So $\map P n$ has been shown to be true by the Second Principle of Mathematical Induction.
$\Box$


Proof of Equivalence
Now we need to show that any two complete factorizations of $x$ in $D$ are equivalent.
Suppose $p_1 p_2 \ldots p_r = q_1 q_2 \ldots q_s$ where all the $p$s and $q$s are irreducible elements of $D$.
Then:

$p_1 \divides q_1 q_2 \ldots q_s$
and by Euclid's Lemma for Irreducible Elements:

$p_1 \divides q_i$ for some $i$.
Since each of these is irreducible, they must by definition either be associates or that $p_1 = q_i$.
Thus we can write $q_i = u_i p_1$ where $u_i$ is a unit of $D$.
Cancelling $p_1$ from both sides, we continue similarly with $p_2$, and so on.
After a finite number of steps we determine that $r = s$ and that $q_1, q_2, \ldots, q_s$ are just associates of $p_1, p_2, \ldots p_r$ perhaps in a different order.
It follows directly, by definition, that $p_1 p_2 \ldots p_r$ and $q_1 q_2 \ldots q_s$ are equivalent factorizations.
$\blacksquare$


Also known as
This result is otherwise known as the unique factorization theorem.
However, this is also sometimes used for the name of the Fundamental Theorem of Arithmetic, and it can be argued that the names are best kept separate.


Also see
Fundamental Theorem of Arithmetic: the result in the domain of integers


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 30$. Unique Factorization: Theorem $59$




