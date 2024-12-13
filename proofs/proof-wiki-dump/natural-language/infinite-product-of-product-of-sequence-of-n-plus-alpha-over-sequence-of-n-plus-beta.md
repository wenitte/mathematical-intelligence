# 

Source: https://proofwiki.org/wiki/Infinite_Product_of_Product_of_Sequence_of_n_plus_alpha_over_Sequence_of_n_plus_beta


It has been suggested that this page be renamed.In particular: If someone can come up with a better title than this (perhaps by finding that someone put their name to it) then please go to it.To discuss this page in more detail, feel free to use the talk page.
Theorem
$\ds \prod_{n \mathop \ge 1} \dfrac {\paren {n + \alpha_1} \cdots \paren {n + \alpha_k} } {\paren {n + \beta_1} \cdots \paren {n + \beta_k} } = \dfrac {\map \Gamma {1 + \beta_1} \cdots \map \Gamma {1 + \beta_k} } {\map \Gamma {1 + \alpha_1} \cdots \map \Gamma {1 + \alpha_k} }$
where:

$\alpha_1 + \cdots + \alpha_k = \beta_1 + \cdots + \beta_k$
none of the $\beta$s is a negative integer.


Proof
First we note that if any of the $\beta$s is a negative integer, the left hand side would have $0$ as its denominator, and so would be undefined.
We have from the Euler form of the Gamma function that:

$\map \Gamma {1 + \beta_i} = \ds \lim_{m \mathop \to \infty} \dfrac {m^{1 + \beta_i} m!} {\paren {1 + \beta_i} \paren {2 + \beta_i} \cdots \paren {m + 1 + \beta_i} }$
and so the right hand side can be written as:














\(\ds \)

\(\)







\(\ds \dfrac {\paren {\ds \lim_{m \mathop \to \infty} \dfrac {m^{1 + \beta_1} m^{1 + \beta_2} \cdots m^{1 + \beta_k} \paren {m!}^k} {\ds \prod_{1 \mathop \le n \mathop \le m + 1} \paren {n + \beta_1} \paren {n + \beta_2} \cdots \paren {n + \beta_k} } } } {\paren {\ds \lim_{m \mathop \to \infty} \dfrac {m^{1 + \alpha_1} m^{1 + \alpha_2} \cdots m^{1 + \alpha_k} \paren {m!}^k} {\ds \prod_{1 \mathop \le n \mathop \le m + 1} \paren {n + \alpha_1} \paren {n + \alpha_2} \cdots \paren {n + \alpha_k} } } }\)




















\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \dfrac {\ds \prod_{1 \mathop \le n \mathop \le m + 1} \paren {n + \alpha_1} \paren {n + \alpha_2} \cdots \paren {n + \alpha_k} m^k m^{\beta_1 + \beta_2 + \cdots + \beta_k} \paren {m!}^k} {\ds \prod_{1 \mathop \le n \mathop \le m + 1} \paren {n + \beta_1} \paren {n + \beta_2} \cdots \paren {n + \beta_k} m^k m^{\alpha_1 + \alpha_2 + \cdots + \alpha_k} \paren {m!}^k}\)




















\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \dfrac {\ds \prod_{1 \mathop \le n \mathop \le m + 1} \paren {n + \alpha_1} \paren {n + \alpha_2} \cdots \paren {n + \alpha_k} m^{\beta_1 + \beta_2 + \cdots + \beta_k} } {\ds \prod_{1 \mathop \le n \mathop \le m + 1} \paren {n + \beta_1} \paren {n + \beta_2} \cdots \paren {n + \beta_k} m^{\alpha_1 + \alpha_2 + \cdots + \alpha_k} }\)





simplifying slightly














\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \ds \prod_{1 \mathop \le n \mathop \le m + 1} \dfrac {\paren {n + \alpha_1} \paren {n + \alpha_2} \cdots \paren {n + \alpha_k} } {\paren {n + \beta_1} \paren {n + \beta_2} \cdots \paren {n + \beta_k} }\)





as $\alpha_1 + \cdots + \alpha_k = \beta_1 + \cdots + \beta_k$














\(\ds \)

\(=\)







\(\ds \prod_{n \mathop \ge 1} \dfrac {\paren {n + \alpha_1} \paren {n + \alpha_2} \cdots \paren {n + \alpha_k} } {\paren {n + \beta_1} \paren {n + \beta_2} \cdots \paren {n + \beta_k} }\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $17$




