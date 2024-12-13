# 

Source: https://proofwiki.org/wiki/Primitive_Recursion_on_Arithmetically_Definable_Function_is_Arithmetically_Definable

Theorem
Let $f: \N^k \to \N$ and $g: \N^{k+2} \to \N$ be partial functions.
Let $h: \N^{k + 1} \to \N$ be obtained from $f$ and $g$ by primitive recursion.

Let there exist $\Sigma_1$ WFFs:

$\map {\phi_f} {y, x_1, \dotsc, x_k}$
$\map {\phi_g} {y, x_1, \dotsc, x_k, n, z}$
of $k + 1$ and $k + 3$ free variables, respectively, such that:

$y = \map f {x_1, \dotsc, x_k} \iff \N \models \map {\phi_f} {\sqbrk y, \sqbrk {x_1}, \dotsc, \sqbrk {x_k} }$
$y = \map g {x_1, \dotsc, x_k, n, z} \iff \N \models \map {\phi_g} {\sqbrk y, \sqbrk {x_1}, \dotsc, \sqbrk {x_k}, \sqbrk n, \sqbrk z}$
where $\sqbrk a$ denotes the unary representation of $a \in \N$.

Then there exists a $\Sigma_1$ WFF of $k + 2$ free variables:

$\map {\phi_h} {y, x_1, \dotsc, x_k, n}$
such that:

$y = \map h {x_1, \dotsc, x_k, n} \iff \N \models \map {\phi_h} {\sqbrk y, \sqbrk {x_1}, \dotsc, \sqbrk {x_k}, \sqbrk n}$


Proof
By Gödel's Beta Function is Arithmetically Definable, let:

$\map {\phi_\beta} {y, a, b, i}$
be a $\Sigma_1$ WFF of $4$ free variables such that:
$y = \map \beta {a, b, i} \iff \N \models \map {\phi_\beta} {\sqbrk y, \sqbrk a, \sqbrk b, \sqbrk i}$

Define $\map {\phi_h} {y, x_1, \dotsc, x_k, n}$ as:

$\exists a: \exists b: \exists {z_0}: \map {\phi_f} {z_0, x_1, \dotsc, x_k} \land \map {\phi_\beta} {z_0, a, b, 0} \land \map {\phi_\beta} {y, a, b, n} \land \paren {\forall i < n: \exists {z_i}: \exists {z_j}: \map {\phi_\beta} {z_i, a, b, i} \land \map {\phi_\beta} {z_j, a, b, \map s i} \land \map {\phi_g} {z_j, x_1, \dotsc, x_k, i, z_i} }$

To understand this formula, define the finite sequence $\sequence {z_0, \dotsc, z_n}$ defined as:

$z_i = \map h {x_1, \dotsc, x_k, i}$
By the definition of $h$:

$z_0 = \map f {x_1, \dotsc, x_k}$
$z_{i + 1} = \map g {x_1, \dotsc, x_k, i, z_i}$ for all $i < n$
But the formula contains exactly these constraints.
Additionally, as $\phi_\beta$ expresses a function, there is a unique value for the first free variable for which it holds, provided the other variables are held constant.
Then, the formula holds in $\N$ if and only if the values for $\map \beta {a, b, i}$ are exactly $\map h {x_1, \dotsc, x_k, i}$.

By Gödel's Beta Function Lemma, there exist $a, b \in \N$ such that:

$z_i = \map \beta {a, b, i}$
for every $0 \le i \le n$
Therefore, if such $\sequence {z_0, \dotsc, z_n}$ exist, the formula will be true.

Finally, that $\phi_h$ is $\Sigma_1$ follows from:

Conjunction of Existential Quantifier
Bounded Universal Quantifier Distributes over Conjunction
$\blacksquare$





