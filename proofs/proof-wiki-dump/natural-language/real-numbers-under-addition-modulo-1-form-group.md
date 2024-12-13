# 

Source: https://proofwiki.org/wiki/Real_Numbers_under_Addition_Modulo_1_form_Group



Theorem
Let $S = \set {x \in \R: 0 \le x < 1}$.
Let $\circ: S \times S \to S$ be the operation defined as:

$x \circ y = x + y - \floor {x + y}$
That is, $\circ$ is defined as addition modulo $1$.
Then $\struct {S, \circ}$ is a group.


Proof
First note that Modulo Addition is Well-Defined.
Taking the group axioms in turn:


Group Axiom $\text G 0$: Closure
In Real Number minus Floor it is demonstrated that:

$\forall x, y \in S: x \circ y \in S$
Thus $\struct {S, \circ}$ is closed.
$\Box$


Group Axiom $\text G 1$: Associativity
The associativity of $\circ$ follows from that of the sum of real numbers.


This needs considerable tedious hard slog to complete it.In particular: More needs to be done here.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Thus $\circ$ is associative on $S$.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
By definition of $S$:

$0 \in S$

Let $x \in S$.
We have that:

$0 \le x < 1$
and so by definition of floor function:

$\floor x = 0$

So:














\(\ds x \circ 0\)

\(=\)







\(\ds x + 0 - \floor {x + 0}\)




















\(\ds \)

\(=\)







\(\ds x - \floor x\)




















\(\ds \)

\(=\)







\(\ds x - 0\)





from above














\(\ds \)

\(=\)







\(\ds x\)










Hence $\struct {S, \circ}$ has $0$ as an identity element.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
Let $x \in S$.
First let $x = 0$.
We have that $0$ is the identity of $\struct {S, \circ}$:

$0 \circ 0 = 0$
and so from Inverse of Identity Element is Itself, $0$ is its own inverse.

Now let $x \ne 0$.
By definition of $S$:

$0 \le x < 1$
Hence:

$1 - x \in S$
(Note that because $1 - 0 \notin S$, the above is not true for $x = 0$, which is why it has been treated as a special case.)

Therefore:














\(\ds x \circ \paren {1 - x}\)

\(=\)







\(\ds x + 1 - x - \floor {x + 1 - x}\)




















\(\ds \)

\(=\)







\(\ds 1 - \floor 1\)




















\(\ds \)

\(=\)







\(\ds 1 - 1\)





Real Number is Integer iff equals Floor














\(\ds \)

\(=\)







\(\ds 0\)










From above, $0$ is the identity of $\struct {S, \circ}$.

Thus every element $x$ of $\struct {S, \circ}$ has an inverse:

$\begin {cases} 1 - x & : x \ne 0 \\ 0 & : x = 0 \end {cases}$
$\Box$

All the group axioms are thus seen to be fulfilled, and so $\struct {S, \circ}$ is a group.
$\blacksquare$





