# 

Source: https://proofwiki.org/wiki/Invertibility_of_Identity_Minus_Operator


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.
Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a Banach space over $\GF$. 
Let $T : X \to X$ be a bounded linear operator such that: 

$\norm T_{\map \BB X} < 1$
where $\norm {\, \cdot \,}_{\map \BB X}$ denotes the norm of a bounded linear operator. 

Then $I - T$ is invertible as a bounded linear operator.
In particular: 

$\ds \paren {I - T}^{-1} = \sum_{n \mathop = 0}^\infty T^n$


Corollary
Let $T : X \to X$ be a invertible bounded linear operator. 
Let $S : X \to X$ be a bounded linear operator such that: 

$\norm S_{\map \BB X} \norm {T^{-1} }_{\map \BB X} < 1$

Then $T + S : X \to X$ is an invertible bounded linear operator.


Proof
For each $n \in \N$, define: 

$\ds S_n = \sum_{k \mathop = 0}^n T^k$
We argue first that $\sequence {S_n}_{n \mathop \in \N}$ is convergent. 
Since $X$ is a Banach space, it is enough to show that $\sequence {S_n}_{n \mathop \in \N}$ is Cauchy. 
Let $\epsilon > 0$. 
Let $m, n \in \N$ with $n > m$. 
Then we have: 














\(\ds \norm {S_n - S_m}_{\map \BB X}\)

\(=\)







\(\ds \norm {\sum_{k \mathop = 0}^n T^k - \sum_{k \mathop = 0}^m T^k}_{\map \BB X}\)




















\(\ds \)

\(=\)







\(\ds \norm {\sum_{k \mathop = m + 1}^n T^k}_{\map \BB X}\)




















\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = m + 1}^n \norm T_{\map \BB X}^k\)





Norm Axiom $\text N 2$: Positive Homogeneity, Norm on Bounded Linear Transformation is Submultiplicative: Corollary



From Sum of Infinite Geometric Sequence, we have: 

$\ds \sum_{k \mathop = 0}^\infty \norm T_{\map \BB X}^k$
since $\norm T_{\map \BB X} < 1$. 
So: 

$\ds \sequence {\sum_{k \mathop = 0}^n \norm T_{\map \BB X}^k}_{n \mathop \in \N}$ is Cauchy.
So we can pick $N \in \N$ such that for $n > m \ge N$ we have: 

$\ds \sum_{k \mathop = m + 1}^n \norm T_{\map \BB X}^k < \epsilon$
So for $n > m \ge N$ we have: 

$\norm {S_n - S_m}_{\map \BB X} < \epsilon$
Hence from Norm Axiom $\text N 2$: Positive Homogeneity we have: 

$\norm {S_n - S_m}_{\map \BB X} < \epsilon$
for all $n, m \in \N$ with $n, m \ge N$. 
So $\sequence {S_n}_{n \mathop \in \N}$ is Cauchy and hence convergent in $\map \BB X$. 
Denote: 

$\ds S = \lim_{n \mathop \to \infty} S_n = \sum_{k \mathop = 0}^\infty T^k$
To finish we show that $\paren {I - T} S = S \paren {I - T} = I$. 
Now for each $n \in \N$, we have: 














\(\ds \paren {I - T} S_n\)

\(=\)







\(\ds \paren {I - T} \paren {\sum_{k \mathop = 0}^n T^k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n T^k - \sum_{k \mathop = 0}^n T^{k + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n T^k - \sum_{k \mathop = 1}^{n + 1} T^k\)




















\(\ds \)

\(=\)







\(\ds I - T^{n + 1}\)









and similarly: 














\(\ds S_n \paren {I - T}\)

\(=\)







\(\ds \paren {\sum_{k \mathop = 0}^n T^k} \paren {I - T}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n T^k - \sum_{k \mathop = 0}^n T^{k + 1}\)




















\(\ds \)

\(=\)







\(\ds I - T^{k + 1}\)









We now show that $I - T^{k + 1} \to I$ in $\map \BB X$. 
We have: 














\(\ds \norm {\paren {I - T^{k + 1} } - I}_{\map \BB X}\)

\(=\)







\(\ds \norm {T^{k + 1} }_{\map \BB X}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(\le\)







\(\ds \norm T_{\map \BB X}^{k + 1}\)





Norm on Bounded Linear Transformation is Submultiplicative: Corollary














\(\ds \)

\(\to\)







\(\ds 0\)





since $\norm T_{\map \BB X} < 1$



On the other hand by Convergence of Product in Normed Algebra, we have: 

$S_n \paren {I - T} \to S \paren {I - T}$
and: 

$\paren {I - T} S_n \to \paren {I - T} S$
in $\map \BB X$, while: 

$S_n \paren {I - T} = \paren {I - T} S_n = I - T^{k + 1} \to I$
So we have: 

$S \paren {I - T} = \paren {I - T} S = I$
$\blacksquare$





