# 

Source: https://proofwiki.org/wiki/Set_is_Recursive_iff_Set_and_Complement_are_Recursively_Enumerable



Theorem
Let $S \subseteq \N$ be a set of natural numbers.
Then:

$S$ is a recursive set
if and only if:

$S$ and $\N \setminus S$ are recursively enumerable sets.


Proof
Necessary Condition

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Complement of Recursive Set. More generally, we should show that constructions with primitive recursive things work on recursive ones as well, such as Definition by Cases is Primitive Recursive, etc.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
By Complement of Primitive Recursive Set, $\N \setminus S$ is a recursive set as well.
Thus, it suffices to show that every recursive $S$ is recursively enumerable.
By definition of recursive set, the characteristic function $\chi_S$ is recursive.
Define:

$\map f x = \map {\mu z} {\map {\overline {\operatorname{sgn}}} {\map {\chi_S} x}}$
As $f$ is obtained by substitution and minimization, and:

Signum Complement Function is Primitive Recursive
Primitive Recursive Function is Total Recursive Function
it follows that $f$ is a recursive function.
We now show that $\Dom f = S$.

Suppose $x \in S$.
Then, by definition of characteristic function:

$\map {\chi_S} x = 1$
Thus, by definition of the signum-bar function:

$\map {\overline {\operatorname{sgn}}} {\map {\chi_S} x} = 0$
Therefore, by the definition of minimization:

$\map {\mu z} {\map {\overline {\operatorname{sgn}}} {\map {\chi_S} x}} = 0$
as the previous equation is true for every value of $z$, and $0$ is the smallest natural number.
Hence, $f$ is defined at $x$, so $x \in \Dom f$.

Now, suppose $x \notin S$.
By definition of characteristic function:

$\map {\chi_S} x = 0$
By definition of the signum-bar function:

$\map {\overline {\operatorname{sgn}}} {\map {\chi_S} x} = 1$
Therefore, by the definition of minimization:

$\map {\mu z} {\map {\overline {\operatorname{sgn}}} {\map {\chi_S} x}}$ is undefined
as there is no $z$ that causes the function to be equal to $0$.
Hence, $x \notin \Dom f$.

As we have shown $x \in S \iff x \in \Dom f$, it follows that $S = \Dom f$.
By Set is Recursively Enumerable iff Domain of Recursive Function, $S$ is then recursively enumerable.
$\Box$


Sufficient Condition
Let $S$ and $\N \setminus S$ be recursively enumerable.

Suppose $S$ is the empty set.
Then $\map {\chi_S} x = 0$ is the characteristic function of $S$.
In that case, $\chi_S$ is recursive by:

Constant Function is Primitive Recursive
Primitive Recursive Function is Total Recursive Function
and so $S$ is recursive by definition.

Suppose instead that $\N \setminus S$ is the empty set.
Then $\map {\chi_S} x = 1$ is the characteristic function of $S$.
By the same argument, it follows that $S$ is recursive.

Now, suppose neither $S$ nor $\N \setminus S$ are empty.
Then, Recursively Enumerable Set is Image of Primitive Recursive Function/Corollary applies.
Therefore, there exist primitive recursive $f, g : \N \to \N$ such that:

$S = \Img f$
$\N \setminus S = \Img g$
Define:

$\map h x = \map {\mu z} {x = \map f z \lor x = \map g z}$
By:

Equality Relation is Primitive Recursive
Set Operations on Primitive Recursive Relations
Minimization on Relation Equivalent to Minimization on Function
$h$ is a recursive function.
Finally, define:

$\map {\chi_S} x = \map {\chi_{\operatorname{eq}}} {x, \map f {\map h x}}$
$\chi_S$ is recursive, as it is defined by substitution on recursive functions.
We now show that $\chi_S$ is the characteristic function of $S$.

Suppose $x \in S$.
Then, $x \in \Img f$ and $x \notin \Img g$.
That is:

There is some $z \in \N$ such that $\map f z = x$
There is no $z \in \N$ such that $\map g z = x$
Therefore, $\map h x$ is defined to be the least $z$ such that $\map f z = x$.
Thus, $\map {\chi_S} x = 1$, as expected.

Suppose $x \notin S$.
Then, conversely, $x \notin \Img f$ and $x \notin \Img g$.
The same argument applies, and:

There is no $z \in \N$ such that $\map f z = x$
$\map h x$ is the least $z$ such that $\map g z = x$, which necessarily exists
Thus, $\map f {\map h z} \ne x$, and $\map {\chi_S} x = 0$.

Since the characteristic function of $S$ is recursive, $S$ is a recursive set by definition.
$\blacksquare$





