# 

Source: https://proofwiki.org/wiki/Absolute_Value_of_Simple_Function_is_Simple_Function/Proof_2

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f: X \to \R$ be a simple function.

Then $\size f: X \to \R$, the absolute value of $f$, is also a simple function.


Proof
By Simple Function has Standard Representation, $f$ has a standard representation, say:

$(1): \quad f = \ds \sum_{k \mathop = 0}^n a_k \chi_{E_k}$
Then, for all $x \in X$:

$\map {\size f} x = \ds \size {\sum_{k \mathop = 0}^n a_k \map {\chi_{E_k} } x}$
by definition of pointwise absolute value.
The fact that $(1)$ forms a standard representation ensures that for every $x \in X$, precisely one $k$ has $x \in E_k$.

Now suppose that $x \in E_l$. 
Then $\map {\chi_{E_l} } x = 0$ if and only if $k \ne l$ by definition of characteristic function.
It follows that $\map {\size f} x = \size {a_l \cdot 1} = \size {a_l}$.

Now define $g: X \to \R$ by:

$\map g x := \ds \sum_{k \mathop = 0}^n \size {a_k} \map {\chi_{E_k} } x$
By construction, $g$ is a simple function, and for $x \in E_l$:

$\map g x = \size {a_l}$

Thus, since every $x$ is in $E_l$ for precisely one $l$, it has been shown that $g = \size f$.
As $g$ was a simple function, it follows that $\size f$ is also a simple function.
$\blacksquare$





