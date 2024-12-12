# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Countable_Sets_is_Countable/Formal_Proof_2

Theorem
The cartesian product of two countable sets is countable.


Proof
Let $S, T$ be countable sets.
Let $S = \set {s_1, s_2, s_3, \dotsc}$ and $T = \set {t_1, t_2, t_3, \dotsc}$ be enumerations of $S$ and $T$ respectively.
Let $f: S \times T: \N$ be the mapping defined as:

$\forall \tuple {s_k, t_l} \in S \times T: \map f {s_k, t_l} = \dfrac {\paren {k + l - 1} \paren {k + l - 2} } 2 + \dfrac {l + \paren {-1}^{k + 1} } 2 k + \dfrac {1 + \paren {-1}^{k + l - 1} } 2 l$
Then $f$ gives an enumeration of $S \times T$.

This enumeration can be depicted schematically as:

$\begin {array} {} \tuple {s_1, t_1} & & \tuple {s_1, t_2} & \to  & \tuple {s_1, t_3} & & \tuple {s_1, t_4} & \to & \dotsc \\
\downarrow & \nearrow & & \swarrow & & \nearrow  & \dotsc \\
\tuple {s_2, t_1} & & \tuple {s_2, t_2} & & \tuple {s_2, t_3} & \dotsc \\
& \swarrow & & \nearrow & \dotsc \\
\tuple {s_3, t_1} & & \tuple {s_2, t_3} & \dotsc \\
\downarrow & \nearrow & \dotsc \\
\tuple {s_3, t_1} & \dotsc \\
\vdots \\
\end{array}$
Hence the result.
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Introduction to Set Theory: $2$. Set Theoretical Equivalence and Denumerability




