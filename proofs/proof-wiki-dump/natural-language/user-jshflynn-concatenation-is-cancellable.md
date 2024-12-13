# 

Source: https://proofwiki.org/wiki/User:Jshflynn/Concatenation_is_Cancellable

Theorem
Let $\Sigma$ be an alphabet.

$\Sigma^{*}$ denote the Kleene star of $\Sigma$ and $\circ$ denote concatenation.

Then concatenation is a cancellable operation. 

That is,  $\forall x, y, z \in \Sigma^{*}$: 


$x \circ z = y \circ z \implies x=y$ and $z \circ x = z \circ y \implies x=y$


Proof
The special case where $x = \lambda$ or $y = \lambda$ follows immediately from Empty Word is Two-sided Identity.

Let $x, y \in \Sigma^{*}$, from the definition of concatenation:


$
(x \circ z)_i =
\begin{cases}
x_i & \text{if }1 \le i \le \operatorname{len}(x) \\
z_{i-\operatorname{len}(x)} & \text{if }\operatorname{len}(x)< i \le
\operatorname{len}(x)+\operatorname{len}(z)
\end{cases}
$

And


$
(y \circ z)_i =
\begin{cases}
y_i & \text{if }1 \le i \le \operatorname{len}(y) \\
z_{i-\operatorname{len}(y)} & \text{if }\operatorname{len}(y)< i \le
\operatorname{len}(y)+\operatorname{len}(z)
\end{cases}
$

So $\operatorname{len}(x) = \operatorname{len}(y)$ and $\forall i: x_i = y_i$. 

Hence by the definition of word equality $x=y$ and concatenation is right cancellable.

The proof that concatenation is left cancellable follows similarly. 

$\blacksquare$





