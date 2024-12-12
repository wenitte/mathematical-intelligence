# 

Source: https://proofwiki.org/wiki/Bienaym%C3%A9-Chebyshev_Inequality


This article is complete as far as it goes, but it could do with expansion.In particular: According to 2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.), there are more of these than just this one. Refactoring and renaming as appropriate can be done when we document them.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Theorem
Let $X$ be a random variable. 
Let $\expect X = \mu$ for some $\mu \in \R$. 
Let $\var X = \sigma^2$ for some $\sigma^2 \in \R_{> 0}$.

Then, for all $k > 0$: 

$\map \Pr {\size {X - \mu} \ge k \sigma} \le \dfrac 1 {k^2}$


Proof 1
Let $f$ be the function:

$\map f x = \begin{cases} k^2 \sigma^2 & : \size {x - \mu} \ge k \sigma \\
0 & : \text{otherwise} \end{cases}$
By construction:

$\forall x \in \Dom f: \map f x \le \size {x - \mu}^2 = \paren {x - \mu}^2$

Hence from Expectation Preserves Inequality:

$\expect {\map f X} \le \expect {\paren {X - \mu}^2}$
By definition of variance:

$\expect {\paren {X - \mu}^2} = \var X = \sigma^2$
By definition of expectation of discrete random variable, we can show that:














\(\ds \expect {\map f X}\)

\(=\)







\(\ds k^2 \sigma^2 \map \Pr {\size {X - \mu} \ge k \sigma} + 0 \cdot \map \Pr {\size {X - \mu} \le k \sigma}\)




















\(\ds \)

\(=\)







\(\ds k^2 \sigma^2 \map \Pr {\size {X - \mu} \ge k \sigma}\)









Putting this together, we have:














\(\ds \expect {\map f X}\)

\(\le\)







\(\ds \expect {\paren {X - \mu}^2}\)














\(\ds \leadsto \ \ \)





\(\ds k^2 \sigma^2 \map \Pr {\size {X - \mu} \ge k \sigma}\)

\(\le\)







\(\ds \sigma^2\)









By dividing both sides by $k^2 \sigma^2$, we get: 

$\map \Pr {\size {X - \mu} \ge k \sigma} \le \dfrac 1 {k^2}$
$\blacksquare$


Proof 2
Note that as $k > 0$ and $\sigma > 0$, we have $k \sigma > 0$.
We therefore have:














\(\ds \map \Pr {\size {X - \mu} \ge k \sigma}\)

\(=\)







\(\ds \map \Pr {\paren {X - \mu}^2 \ge \paren {k \sigma}^2}\)




















\(\ds \)

\(\le\)







\(\ds \frac {\expect {\paren {X - \mu}^2} } {\paren {k \sigma}^2}\)





as $k \sigma > 0$, we can apply Markov's Inequality: Corollary














\(\ds \)

\(=\)







\(\ds \frac {\sigma^2} {k^2 \sigma^2}\)





Definition of Variance














\(\ds \)

\(=\)







\(\ds \frac 1 {k^2}\)









$\blacksquare$


Also known as
The Bienaymé-Chebyshev Inequality is also known as Chebyshev's Inequality.
However, some sources use this name to mean the Chebyshev's Sum Inequality, which is a completely different result.
Hence, to avoid confusion, the name Chebyshev's Inequality is not used on $\mathsf{Pr} \infty \mathsf{fWiki}$.
Variants on spellings can be seen: Bienaymé-Tchebyshev Inequality, Tchebyshev's Inequality, and so on.


Source of Name
This entry was named for Pafnuty Lvovich Chebyshev and Irénée-Jules Bienaymé.


Historical Note
The result now known as the Bienaymé-Chebyshev Inequality was first formulated, without proof, by Irénée-Jules Bienaymé in $1853$.
The proof was provided by his friend and colleague Pafnuty Lvovich Chebyshev in $1867$.
Chebyshev's student Andrey Andreyevich Markov provided another proof in his $1884$ Ph.D. thesis.


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Tchebyshev's inequality (P.L. Tchebyshev, 1874)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Tchebyshev's inequality (P.L. Tchebyshev, 1874)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Chebyshev's inequalities




