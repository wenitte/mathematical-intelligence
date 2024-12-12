# 

Source: https://proofwiki.org/wiki/User:Addem/riesz_fischer



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $p \in \R$, $p \ge 1$.
The Lebesgue $p$-space $\map {\LL^p} \mu$, endowed with the $p$-norm, is a complete metric space.


Proof
Equivalent to being a norm complete space, is the property that every absolutely summable sequence is summable.  Let $\{f_n\}$ be an absolutely summable sequence, $f_n\in \map{\LL^p}\mu$, and define $\sum_{k=1}^\infty \norm {f_k} = B < \infty$.  Also define $G_n = \sum_{k=1}^n|f_k|$ and $G=\sum_{k=1}^\infty |f_k|$.  
It is clear that the conditions of the Monotone Convergence Theorem hold, so that $\int_X G^p = \lim_{n\to\infty}\int_X G_n^p$.  By observing that 














\(\ds \norm{G_n}_p\)

\(\le\)







\(\ds \sum_{k=1}^n \norm{f_n}_p\)




















\(\ds \)

\(\le\)







\(\ds B\)




















\(\ds \)

\(<\)







\(\ds \infty\)









we can also say that $\int_X |G_n|^p \le B^p$ and therefore $\lim_{n\to\infty}\int_X |G_n|^p \le B^p$.  Therefore we have that $\int_XG^p \le B^p < \infty$ which confirms that $G\in \map{\LL^p}\mu$.  
Notice that in particular $G\in \map{\LL^p}\mu$ entails that $G<\infty$ a.e.  Because absolute convergence entails conditional convergence, we then have $F=\sum_{k=1}^\infty f_k$ converges a.e.  Because $|F|\le G$ then $F\in \map{\LL^p}\mu$.  
It only remains to show that $\sum_{k=1}^n f_k \to F$, which we can accomplish by the Lebesgue Dominated Convergence Theorem.  Because $\left|F - \sum_{k=1}^n f_k\right|^p \le (2G)^p \in \map{\LL^1}\mu$ then the theorem applies, and we infer 
$ \ds \norm{F-\sum_{k=1}^n f_k}_p^p = \int_X\left|F-\sum_{k=1}^n f_k\right|^p \to 0 $
Therefore by definition of convergence in $\map{\LL^p}\mu$ we have that $\sum_{k=1}^\infty f_k$ converges in $\map{\LL^p}\mu$.  This shows that $\{f_k\}$ is summable, as desired.  

$\blacksquare$


Source of Name
This entry was named for Frigyes Riesz and Ernst Sigismund Fischer.


Historical Note
The Riesz-Fischer Theorem was proved jointly by Ernst Sigismund Fischer and Frigyes Riesz.
Fischer proved the result for $p = 2$, while Riesz (independently) proved it for all $p \ge 1$.


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $12.7$




