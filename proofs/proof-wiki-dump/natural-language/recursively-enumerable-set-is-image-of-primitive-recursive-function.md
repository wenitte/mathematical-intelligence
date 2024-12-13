# 

Source: https://proofwiki.org/wiki/Recursively_Enumerable_Set_is_Image_of_Primitive_Recursive_Function

Theorem
Let $S \subseteq \N$ be recursively enumerable.
Suppose $S$ is non-empty.
Then there exists a primitive recursive function $f : \N^k \to \N$ such that:

$\Img f = S$
Corollary
Let $S \subseteq \N$ be recursively enumerable.
Suppose $S$ is non-empty.
Then there exists a primitive recursive function $f : \N \to \N$ such that:

$\Img f = S$


Proof

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be tidied.In particular: minor stuff, I'll be on the case in due coursePlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
By definition of recursively enumerable, there exists a recursive function $g : \N^\ell \to \N$ such that:

$\Img g = S$
By definition of non-empty, there exists some $x \in S$.

By Kleene's Normal Form Theorem, there exist:

A primitive recursive relation $T \subset \N^{\ell + 2}$
A primitive recursive function $U : \N \to \N$
such that a partial function $h : \N^\ell \to \N$ is recursive if and only if there exists $e \in \N$ such that:

$\map h {x_1, \dotsc, x_\ell} \approx \map U {\mu z \map T {e, x_1, \dotsc, x_\ell, z}}$
for every $\tuple {x_1, \dotsc, x_\ell} \in \N^\ell$.
Thus, as $g$ is recursive, there exists such an $e$.

Define $V : \N^{\ell + 1} \to \N$ as:

$\map V {x_1, \dotsc, x_\ell, t} = \map {\mu z \le t} {\map T {e, x_1, \dotsc, x_\ell, z}}$
$V$ is primitive recursive by Bounded Minimization is Primitive Recursive.
Define $f : \N^{\ell + 1} \to \N$ as:

$\map f {x_1, \dotsc, x_\ell, t} = \begin{cases}
\map U {\map V {x_1, \dotsc, x_\ell, t}} & : \map V {x_1, \dotsc, x_\ell, t} \le t \\
x & : \map V {x_1, \dotsc, x_\ell, t} > t
\end{cases}$
By Definition by Cases is Primitive Recursive and Ordering Relations are Primitive Recursive, $f$ is primitive recursive.

It remains to show that $\Img f = \Img g$.
Suppose $y \in \Img g$.
Then, for some $\tuple {x_1, \dotsc, x_\ell} \in \N^\ell$:

$\map g {x_1, \dotsc, x_\ell} = y$
Thus, by definition of $T$ and $U$:

$\map U {\map {\mu z} {\map T {e, x_1, \dotsc, x_\ell, z}}} = y$
Let $t = \map {\mu z} {\map T {e, x_1, \dotsc, x_\ell, z}}$.
Hence:

$\map V {x_1, \dotsc, x_\ell, t} = \map {\mu z} {\map T {e, x_1, \dotsc, x_\ell, z}} = t$.
Therefore, as $t \le t$:

$\map f {x_1, \dotsc, x_\ell, t} = \map U t = y$.
Thus, $y \in \Img f$.
$\Box$

Now, suppose $y \in \Img f$.
Then there exists $\tuple {x_1, \dotsc, x_\ell, t} \in \N^{\ell + 1}$ such that:

$\map f {x_1, \dotsc, x_\ell, t} = y$
By the definition of $f$, either:

$\map U {\map V {x_1, \dotsc, x_\ell, t}} = y$ and $\map V {x_1, \dotsc, x_\ell, t} \le t$, or
$x = y$ and $\map V {x_1, \dotsc, x_\ell, t} > t$.
In the second case, $x \in S = \Img g$ by definition.
In the first, let $r = \map V {x_1, \dotsc, x_\ell, t}$.
As $r \le t$, by definition of $V$ and bounded minimization:

$r = \map {\mu z} {\map T {e, x_1, \dotsc, x_\ell, z}}$
But then, $y = \map U r = \map U {\map {\mu z} {\map T {e, x_1, \dotsc, x_\ell, z}}} = \map g {x_1, \dotsc, x_\ell}$.
Therefore, $y \in \Img g$.
$\blacksquare$





