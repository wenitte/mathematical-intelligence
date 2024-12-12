# 

Source: https://proofwiki.org/wiki/Bounded_Minimization_is_Primitive_Recursive


This page has been identified as a candidate for refactoring of basic complexity.In particular: Separate pages for relation and functionUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Function
Let $f: \N^{k + 1} \to \N$ be a primitive recursive function.

Then the function $g: \N^{k + 1} \to \N$ defined as:

$\map g {n_1, n_2, \ldots, n_k, z} = \mu y \le \map z {\map f {n_1, n_2, \ldots, n_k, y} = 0}$
where $\mu y \le \map z {\map f {n_1, n_2, \ldots, n_k, y} = 0}$ is the bounded minimization operation on $f$
is also primitive recursive.


Relation
Let $\RR$ be a primitive recursive $k+1$-ary relation on $\N^{k+1}$.

Then the function $g: \N^{k+1} \to \N$ defined as:

$\map g {n_1, n_2, \ldots, n_k, z} = \mu y \le z \RR \tuple {n_1, n_2, \ldots, n_k, y}$
where $\mu y \le z \RR \tuple {n_1, n_2, \ldots, n_k, y}$ is the bounded minimization operation on $\RR$
is also primitive recursive.


Proof
Proof for Function
We can define $g$ as follows:

$(1) \quad \map g {n_1, n_2, \ldots, n_k, 0} = \begin{cases}
0 & : \map f {n_1, n_2, \ldots, n_k, 0} = 0 \\
1 & : \text{otherwise} \\
\end{cases}$

$(2) \quad \map g {n_1, n_2, \ldots, n_k, z + 1} = \begin{cases}
\map g {n_1, n_2, \ldots, n_k, z} & : \map g {n_1, n_2, \ldots, n_k, z} \le z \\
z + 1 & : \map g {n_1, n_2, \ldots, n_k, z} = z + 1 \text{ and } \map f {n_1, n_2, \ldots, n_k, z + 1} = 0 \\
z + 2 & : \text{otherwise} \\
\end{cases}$
The fact that $(1)$ is true is clear.

The cases in $(1)$ are clearly mutually exclusive and exhaustive;
By the corollary to Definition by Cases is Primitive Recursive, the relations defining the cases are primitive recursive;
The constants $0$ and $1$ are primitive recursive.
Hence by Definition by Cases is Primitive Recursive, the function defined in $(1)$ is primitive recursive.

Now we investigate $(2)$.
Note that if $\map g {n_1, n_2, \ldots, n_k, z} \le z$ then the equation $\map f {n_1, n_2, \ldots, n_k, y} = 0$ has a solution for some $y \le z$.
Then the smallest $y \le z$ which solves this equation is also the smallest value of $y \le z + 1$ which solves this equation.
So in this case, $\map g {n_1, n_2, \ldots, n_k, z + 1} = \map g {n_1, n_2, \ldots, n_k, z}$.
Otherwise there is no such $y \le z$ that solves the equation.
Then the value $\map g {n_1, n_2, \ldots, n_k, z + 1}$ is $z + 1$ if $\map f {n_1, n_2, \ldots, n_k, z + 1} = 0$.
But if $\map f {n_1, n_2, \ldots, n_k, z + 1} \ne 0$ then $\map g {n_1, n_2, \ldots, n_k, z + 1} = \paren {z + 1} + 1 = z + 2$.
Thus $g$ as defined in $(1)$ and $(2)$ are an appropriate definition of:

$\map g {n_1, n_2, \ldots, n_k, z} = \mu y \le \map z {\map f {n_1, n_2, \ldots, n_k, y} = 0}$

Now to show that the function defined in $(2)$ is primitive recursive.
By the corollary to Definition by Cases is Primitive Recursive, the relations defining the cases are primitive recursive.
Then we have that $\map g {n_1, n_2, \ldots, n_k, z}$, $z + 1$ and $z + 2$ are expressed in terms of:

$\map g {n_1, n_2, \ldots, n_k, z}$
the variable $z$
the primitive recursive function $\operatorname {add}$
the constants $1$ and $2$.
So all these functions are primitive recursive.
Hence by Definition by Cases is Primitive Recursive, the function defined in $(2)$ is primitive recursive.
Therefore $g$ is defined by primitive recursion from functions which we have proved to be primitive recursive.
The result follows.
$\blacksquare$


Proof for Relation
We can mimic the proof for the function.
Or we can do it this way.

From the definition of the characteristic function for $\RR$, we can express $\mu y \le z \RR \tuple {n_1, n_2, \ldots, n_k, y}$ as:

$\mu y \le \map z {\map {\chi_\RR} {n_1, n_2, \ldots, n_k, y} = 1}$
Now we turn $\map {\chi_\RR} {n_1, n_2, \ldots, n_k, y} = 1$ into something of the form $\map f {n_1, n_2, \ldots, n_k, y} = 0$.
We can use signum-bar function:

$\map {\chi_\RR} {n_1, n_2, \ldots, n_k, y} = 1 \iff \map {\overline \sgn} {\map {\chi_\RR} {n_1, n_2, \ldots, n_k, y} } = 0$
Now we define $\map f {n_1, n_2, \ldots, n_k, n_{k + 1} } = \map {\overline \sgn} {\map {\chi_\RR} {n_1, n_2, \ldots, n_k, n_{k + 1} } }$.
This is primitive recursive because it is defined by substitution from:

the primitive recursive function $\overline \sgn$;
the primitive recursive function $\chi_\RR$ (primitive recursive from definition, as $\RR$ is so defined).
Hence from Definition by Cases is Primitive Recursive, $g$ is primitive recursive.
$\blacksquare$





