# 

Source: https://proofwiki.org/wiki/Existence-Uniqueness_Theorem_for_First-Order_Differential_Equation


It has been suggested that this page or section be merged into Solution to Linear First Order Ordinary Differential Equation.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Let $P$ and $Q$ be continuous real functions on some open interval $I \subseteq \R$.
Let $a \in I$.
Let $b \in \R$.

There exists a unique function $\map f x = y$ on $I$ that satisfies the linear first order ordinary differential equation: 

$(1): \quad y' + \map P x y = \map Q x$
along with the initial condition:

$\map f a = b$

This function is:

$\ds \map f x = be^{-\map A x} + e^{-\map A x} \int_a^x \map Q t e^{\map A t} \rd t$
where $\ds \map A x = \int_a^x \map P t \rd t$


Proof
Existence
Because $P$ and $Q$ are continuous, they are integrable.
Hence we may use the Fundamental Theorem of Calculus.














\(\ds \map {f'} x\)

\(=\)







\(\ds -b \map P x e^{-\map A x} - \map P x e^{-\map A x} \int_a^x \map Q t e^{\map A t} \rd t + e^{-\map A x} \map Q x e^{\map A x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -\map P x \paren {b e^{-\map A x} + e^{-\map A x} \int_a^x \map Q t e^{\map A t} \rd t} + \map Q x\)





by factoring














\(\ds \)

\(=\)







\(\ds -\map P x \map f x + \map Q x\)





by substitution




Therefore:

$\map {f'} x + \map P x \map f x = \map Q x$

For the initial condition:














\(\ds \map f a\)

\(=\)







\(\ds b e^{-\map A a} + e^{-\map A a} \int_a^a \map Q t e^{\map A t}dt\)





substituting of $a$ into $\map f x$














\(\ds \)

\(=\)







\(\ds b e^0 + e^0 \cdot 0\)





Integral on Zero Interval














\(\ds \)

\(=\)







\(\ds b\)





simplification



$\Box$


Uniqueness
Let $f$ be a solution to $(1)$ which satisfies the initial condition.
Let $\map g x = \map f x e^{\map A x}$.














\(\ds \map {g'} x\)

\(=\)







\(\ds \map {f'} x e^{\map A x} + \map P x \map f x e^{\map A x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds e^{\map A x} \map Q x\)





by Substitution



Moreover:

$\map g a = b$

By the Fundamental Theorem of Calculus:

$\ds \map g x = \int_a^x \map Q t e^{\map A t} \rd t + b$
Furthermore:

$\map f x = \map g x e^{-\map A x}$
Therefore, we can conclude that:

$\ds \map f x = b e^{-\map A x} + e^{-\map A x} \int_a^x \map Q t e^{\map A t} \rd t$
$\blacksquare$


Sources
1967: Tom M. Apostol: Calculus Volume 1: $\S 8.3$




