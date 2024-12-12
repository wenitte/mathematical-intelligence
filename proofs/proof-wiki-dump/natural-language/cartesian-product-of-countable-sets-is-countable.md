# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Countable_Sets_is_Countable



Theorem
The cartesian product of two countable sets is countable.


Corollary
Let $k$ be an integer such that $k > 1$.
Then the cartesian product of $k$ countable sets is countable.


Informal Proof
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


Formal Proof 1
Let $S, T$ be countable sets.
From the definition of countable, there exists a injection from $S$ to $\N$, and similarly one from $T$ to $\N$.
Hence there exists an injection $g$ from $S \times T$ to $\N^2$.
Now let us investigate the cardinality of $\N^2$.
From the Fundamental Theorem of Arithmetic, every natural number greater than $1$ has a unique prime decomposition.
Thus, if a number can be written as $2^n 3^m$, it can be done thus in only one way.
So, consider the function $f: \N^2 \to \N$ defined by:

$\map f {n, m} = 2^n 3^m$.
Now suppose $\exists m, n, r, s \in \N$ such that $\map f {n, m} = \map f {r, s}$.
Then $2^n 3^m = 2^r 3^s$ so that $n = r$ and $m = s$.
Thus $f$ is an injection, whence $\N^2$ is countably infinite.

Now we see that as $g$ and $f$ are injective, it follows from Composite of Injections is Injection that $f \circ g: S \times T \to \N$ is also injective.
Hence the result.
$\blacksquare$


Formal Proof 2
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
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Exercise $18.16$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 15 \delta$
1979: John E. Hopcroft and Jeffrey D. Ullman: Introduction to Automata Theory, Languages, and Computation ... (previous) ... (next): Chapter $1$: Preliminaries: Exercises: $1.12$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 7$: Countable and Uncountable Sets: Theorem $7.6$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): Appendix $\text{A}$: Set Theory: Countable Sets




