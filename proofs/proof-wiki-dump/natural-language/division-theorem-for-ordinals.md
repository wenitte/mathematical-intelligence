# 

Source: https://proofwiki.org/wiki/Division_Theorem_for_Ordinals



Theorem
Let $x$ and $y$ be ordinals.
Let $0$ denote the zero ordinal.
Suppose $y \ne 0$.

Then there exist unique ordinals $z$ and $w$ such that:

$x = \paren {y \times z} + w$ and $w < y$.


Proof
Existence of $z$ and $w$
First, it must be proven that such $z$ and $w$ exist.

By Relation between Two Ordinals, it follows that:

$x < y$ or $y \le x$
The proof shall proceed by cases.


Case 1
If $x < y$, then set $z = 0$ and $w = x$.
Since $w = x$, then $w < y$.
Furthermore, by Ordinal Multiplication by Zero:

$x = \paren {y \times z} + w$


Case 2
If $y \le x$, then set $z = \bigcup \set {v : \paren {y \times v} \le x}$.
Set $w$ equal to the unique $u$ such that $\paren {y \times z} + u = x$.
By Ordinal Multiplication by One, it follows that $1 \le z$.

By Union of Ordinals is Least Upper Bound, it follows that $z$ is the least upper bound of $\set {v : \paren {y \times v} \le x}$.
Take any $u \in z$.
Then $u \in v$ for some $\paren {y \times v} \le x$
But then, by Membership is Left Compatible with Ordinal Multiplication, it follows that $\paren {y \times u} \le x$.
So $z$ is a transitive subset of $\On$ and therefore, it is an ordinal.

Since $z \ne 0$, then by the definition of limit ordinal, then $z = u^+$ for some $u$ or $z$ is a limit ordinal.

Suppose $z = u^+$.
Then $u < z$ and $y \times u \le x$.
Moreover, $u < v$ for some $y \times v \le x$.
This means that $v \not < z$ by No Natural Number between Number and Successor.
By Ordinal Membership is Trichotomy, $z \le v$.
Therefore:

$y \times z \le x$

Suppose $z \in K_{II}$.
Note that $\forall u \in z: y \times u \le x$ so:














\(\ds y \times z\)

\(=\)







\(\ds \bigcup_{u \mathop \in z} \paren {y \times u}\)





Definition of Ordinal Multiplication














\(\ds \)

\(\le\)







\(\ds \bigcup_{u \mathop \in z} x\)





Indexed Union Subset














\(\ds \)

\(=\)







\(\ds x\)





Set Union is Idempotent



In either case, $y \times z \le x$.

Moreover, suppose that $y \times z^+ \le x$.
Then $z$ is not an upper bound of the set $\set {v : \paren {y \times v} \le x}$, which is a contradiction.

So $\paren {y \times z} + w = x$ for some $w \in y$ by Ordinal Subtraction when Possible is Unique.


Uniqueness of $z$ and $w$
Suppose that $\paren {y \times z_1} + w_1 = x$ for some $w_1 \in y$.
Suppose that $\paren {y \times z_2} + w_2 = x$ for some $w_2 \in y$.

Then for both $z = z_1$ and $z = z_2$, the following inequality is established:














\(\ds y \times z\)

\(\le\)







\(\ds x\)





Ordinal is Less than Sum














\(\ds \)

\(<\)







\(\ds \left({ y \times z }\right) + y\)





Membership is Left Compatible with Ordinal Addition














\(\ds \)

\(=\)







\(\ds y \times z^+\)





Definition of Ordinal Multiplication




It follows that $y \times z_1 < y \times z_2^+$ and $y \times z_2 < y \times z_1^+$.
By Membership is Left Compatible with Ordinal Multiplication, $z_1 < z_2^+$ and $z_2 < z_1^+$.















\(\ds z_1 < z_2^+\)

\(\leadsto\)







\(\ds z_1 < z_2 \lor z_1 = z_2\)





Definition of Successor Set














\(\ds \)

\(\leadsto\)







\(\ds z_1 \le z_2\)




















\(\ds z_2 < z_1^+\)

\(\leadsto\)







\(\ds z_2 \le z_1\)





Definition of Successor Set














\(\ds \)

\(\leadsto\)







\(\ds z_1 = z_2\)





Definition 2 of Set Equality




Therefore $z$ is unique.

Since $z$ is unique, then $w$ is unique by Ordinal Subtraction when Possible is Unique.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.27$




