# 

Source: https://proofwiki.org/wiki/Norm_Equivalence_is_Equivalence



Theorem
Let $X$ be a vector space.
Let $\norm {\, \cdot \,}_a$ and $\norm {\, \cdot \,}_b$ be equivalent norms on $X$.
Denote this relation by $\sim$: 

$\norm {\, \cdot \,}_a \sim \norm {\, \cdot \,}_b$.

Then $\sim$ is an equivalence relation.


Proof
Reflexivity
Let $\norm {\, \cdot \,}$ be a norm on $X$.
Then for all $x \in X$ we have that:

$\norm x = 1 \cdot \norm {x}$
Therefore:

$1 \cdot \norm x \le \norm x \le 1 \cdot \norm x$
Hence:

$\norm {\, \cdot \,} \sim \norm {\, \cdot \,}$.
$\Box$


Symmetry
Suppose, $\norm {\, \cdot \,}_a \sim \norm {\, \cdot \,}_b$.
Then:

$\exists m, M \in \R_{> 0} : m \le M : \forall x \in X : m \norm x_b \le \norm x_a \le M \norm x_b$
Consider two inequalities, obtained by division by $M$ and $m$:

$\dfrac m M \norm x_b \le \dfrac 1 M \norm x_a \le \norm x_b$
$\norm x_b \le \dfrac 1 m \norm x_a \le \dfrac M m \norm x_b$
Notice, that: 

$\dfrac 1 M \norm x_a \le \norm x_b \le \dfrac 1 m \norm x_a$
We have that $m \le M$ implies $\dfrac 1 m \ge \dfrac 1 M$.
Define $C := \dfrac 1 m$ and $c := \dfrac 1 M$.
Hence, $c \le C$ and:

$\norm {\, \cdot \,}_b \sim \norm {\, \cdot \,}_a$
$\Box$


Transitivity
Suppose, $\norm {\, \cdot \,}_a \sim \norm {\, \cdot \,}_b$ and $\norm {\, \cdot \,}_b \sim \norm {\, \cdot \,}_c$.
Then:

$\exists m_{a b}, M_{a b} \in \R_{> 0} : m_{a b} \le M_{a b} : \forall x \in X : m_{a b} \norm x_b \le \norm x_a \le M_{a b} \norm x_b$
$\exists m_{b c}, M_{b c} \in \R_{> 0} : m_{b c} \le M_{b c} : \forall x \in X : m_{b c} \norm x_c \le \norm x_b \le M_{b c} \norm x_c$

Generate $2$ more inequalities by multiplying the second inequality by $m_{a b}$ and $M_{a b}$:

$m_{a b} m_{b c} \norm x_c \le m_{a b} \norm x_b \le m_{a b} M_{b c} \norm x_c$
$M_{a b} m_{b c} \norm x_c \le M_{a b} \norm x_b \le M_{a b} M_{b c} \norm x_c$
From above it follows that:














\(\ds m_{a b} m_{b c} \norm x_c\)

\(\le\)







\(\ds m_{a b} \norm x_b\)





as shown above














\(\ds \)

\(\le\)







\(\ds \norm x_a\)





by hypothesis














\(\ds \)

\(\le\)







\(\ds M_{a b} \norm x_b\)





by hypothesis














\(\ds \)

\(\le\)







\(\ds M_{a b} M_{b c} \norm x_c\)





as shown above



Define $k := m_{a b} m_{b c}$ and $K := M_{a b} M_{b c}$.
Then $k \le K$ and:

$k \norm x_c \le \norm x_a \le K \norm x_c$
Therefore:

$\norm {\, \cdot \,}_a \sim \norm {\, \cdot \,}_c$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




