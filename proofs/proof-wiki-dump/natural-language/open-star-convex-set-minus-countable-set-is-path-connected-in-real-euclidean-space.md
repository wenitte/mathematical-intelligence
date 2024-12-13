# 

Source: https://proofwiki.org/wiki/Open_Star_Convex_Set_Minus_Countable_Set_is_Path-Connected_in_Real_Euclidean_Space

Theorem
Let $k \ge 2$ be a natural number.
Let $A \subset \R^k$ be a star convex set, with star center $a \in A$.
Let $G \subset \R^k$ be finite or countable.
Suppose $a \notin G$.

Then $A \setminus G$ is path-connected.


Proof
Let $x \in A \setminus G$ be an arbitrary point.
By definition of dimension, there is some vector $\vec v \in \R^k$ that is linearly independent from $\vec {x a}$.
Now, consider the mapping $f: \R \to \R^k$:

$\map {\vec f} k = \vec v + k \vec {x a}$
The vector $\vec {x a}$ is linearly independent from every vector in the image of $\vec f$.

For, $\paren {\vec v + k \vec {x a} } - k \vec {x a} = \vec v$, which is linearly independent from $\vec {x a}$.
Likewise, every pair of vectors in $\Img f$ is linearly independent.

For, $\dfrac 1 {k_1 - k_2} \paren {\paren {\vec v + k_1 \vec {x a} } - \paren {\vec v + k_2 \vec {x a} } } = \vec {x a}$
If either $k_1$ or $k_2$ is $0$, then we are done.
Otherwise, $\dfrac {k_2} {k_2 - k_1} \paren {\paren {\vec v + k_1 \vec {x a} } - \dfrac {k_1} {k_2} \paren {\vec v + k_2 \vec {x a} } } = \vec v$.

Associate with each $g \in G$ the unique $k \in \R$, if it exists, such that:

$\exists t \in \R: g = x + t \map {\vec f} k$
That is, the real number $k$ such that $g$ lines on the line extending from $x$ in the direction $\map {\vec f} k$.
By Real Numbers are Uncountably Infinite, $\size \R > \size G$.
Therefore, by Surjection iff Cardinal Inequality, the association is not a surjection.
Thus, there is some $k_0 \in \R$ such that no $g \in G$ lies on the line extending from $x$ in the direction $\map {\vec f} {k_0}$.

By definition of open set, there exists some open ball $\map {B_\epsilon} x \subset A$.
Define the mapping $h: \openint 0 \epsilon \to \R^k$:

$\map h m = x + m \dfrac {\map {\vec f} {k_0} } {\size {\map {\vec f} {k_0} } }$
In words, map each real number in the interval to the point that is distance $m$ in the direction of $\map {\vec f} {k_0}$ from $x$.
As $\vec {x a}$ and $\map {\vec f} {k_0}$ are linearly independent, it follows that the vectors:

$\overrightarrow {\map h m a}$
are are pairwise linearly independent.
We can again associate the $g \in G$ with the unique $m$ such that $g$ lies on the line $\map h m + t \overrightarrow {\map h m a}$.
Each of those lines lies in $A$, by definition of star convex.
As Real Interval is Uncountably Infinite, it follows that there is some $m_0$ for which no $g$ lies on the corresponding line.
But then, the concatenation of the lines from $x$ to $\map h {m_0}$, and then from $\map h {m_0}$ to $a$ does not intersect any $g \in G$.
Therefore, the same path exists in $A \setminus G$.

Finally, for any $y, z \in A \setminus G$, the concatenation of the path from $y$ to $a$, followed by the reverse of $z$ to $a$, forms a path from $y$ to $z$.
Therefore, $A \setminus G$ is path-connected.
$\blacksquare$





