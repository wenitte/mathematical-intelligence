# 

Source: https://proofwiki.org/wiki/Finite-Dimensional_Integral_Domain_over_Field_is_Field



Theorem
Let $k$ be a field.
Let $R$ be a $k$-algebra of finite dimension which is an integral domain.

Then $R$ is a field.


Proof

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
We will prove this using the Rank - Nullity Theorem applied to $A$ viewing it as a finite dimensional vector space over $K$. Pick a non-zero element $y \in A$ and consider the $K$ - linear transformation $$\begin{eqnarray*} T&\colon&A \longrightarrow A \\
&& x\mapsto yx.\end{eqnarray*} $$
Now the kernel of this linear transformation is trivial because $A$ is an integral domain, and hence by rank-nullity we have that 
$$\begin{eqnarray*} \dim_K A &=& \dim \ker T + \dim \operatorname{im} T \\
&=& 0 + \dim \operatorname{im} T\\
&=& \dim \operatorname{im} T \end{eqnarray*}$$
from which it follows that $T$ is surjective. In particular there exists $z \in A$ such that $zy = 1$, so that since $y$ was arbitrary we have shown that every element in $A$ is invertible, i.e. $A$ is a field.

Edit:** I should say it is important to include the hypothesis that $A$ is an integral domain otherwise the result is not necessarily true. Consider the $\Bbb{C}$ - algebra
$$\Bbb{C} \oplus \Bbb{C} \oplus \Bbb{C} $$
as a finite dimensional vector space over $\Bbb{C}$. This is not an integral domain because $(1,0,0) \cdot (0,1,0) = (0,0,0)$. Now we also have 
$$\dim_{\Bbb{C}} \big( \Bbb{C} \oplus \Bbb{C} \oplus \Bbb{C} \big) = 3 < \infty$$
but $\Bbb{C} \oplus \Bbb{C} \oplus \Bbb{C}$ cannot be a field because elements like $(1,0,0)$ don't have an inverse.
If we also drop the hypothesis that $\dim_K A < \infty$ the result is not true as well. For example consider the polynomial ring $\Bbb{C}[T]$ in the indeterminate $T$. This is an integral domain because $\Bbb{C}$ is. Then if we view this as a vector space over $\Bbb{C}$ it is infinite dimensional, but it is already a well known fact that $\Bbb{C}[T]$ is not a field.

$\blacksquare$


Also see
Finite Integral Domain is Galois Field
Ring Element is Unit iff Unit in Integral Extension


Sources
user38268 (https://math.stackexchange.com/users/38268/user38268), If $A$ an integral domain contains a field $K$ and $A$ over $K$ is a finite-dimensional vector space, then $A$ is a field, URL (version: 2012-05-23): https://math.stackexchange.com/q/146859





