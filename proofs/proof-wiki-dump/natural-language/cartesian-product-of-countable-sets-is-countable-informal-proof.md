# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Countable_Sets_is_Countable/Informal_Proof

Theorem
The cartesian product of two countable sets is countable.


Proof
Let $S = \set {s_0, s_1, s_2, \dotsc}$ and $T = \set {t_0, t_1, t_2, \dotsc}$ be countable sets.
If both $S$ and $T$ are finite, the result follows immediately.

Suppose either of $S$ or $T$ (or both) is countably infinite.
We can write the elements of $S \times T$ in the form of an infinite table:
$\quad \begin{array} {*{4}c}
\tuple {s_0, t_0} & \tuple {s_0, t_1} & \tuple {s_0, t_2} & \cdots \\
\tuple {s_1, t_0} & \tuple {s_1, t_1} & \tuple {s_1, t_2} & \cdots \\
\tuple {s_2, t_0} & \tuple {s_2, t_1} & \tuple {s_2, t_2} & \cdots \\
\vdots  & \vdots  & \vdots & \ddots \\
\end{array}
$
This table clearly contains all the elements of $S \times T$.

Now we can count the elements of $S \times T$ by processing the table diagonally.
First we pick $\tuple {s_0, t_0}$.
Then we pick $\tuple {s_0, t_1}, \tuple {s_1, t_0}$. Then we pick $\tuple {s_0, t_2}, \tuple {s_1, t_1}, \tuple {s_2, t_0}$.
We can see that all the elements of $S \times T$ will (eventually) be listed, and there is a specific number (element of $\N$) to index each of its elements with.
Thus we have the required one-to-one correspondence between $S \times T$ and $\N$, and our assertion is proved.
$\blacksquare$





