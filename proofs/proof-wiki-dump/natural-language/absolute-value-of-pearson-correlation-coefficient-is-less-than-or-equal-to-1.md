# 

Source: https://proofwiki.org/wiki/Absolute_Value_of_Pearson_Correlation_Coefficient_is_Less_Than_or_Equal_to_1

Theorem
Let $X$ and $Y$ be random variables. 
Let the variances of $X$ and $Y$ exist and be finite. 

Then: 

$\size {\map \rho {X, Y} } \le 1$
where $\map \rho {X, Y}$ denotes the Pearson correlation coefficient of $X$ and $Y$. 


Proof













\(\ds \paren {\map \rho {X, Y} }^2\)

\(=\)







\(\ds \paren {\frac {\map {\operatorname {Cov} } {X, Y} } {\sqrt {\var X \var Y} } }^2\)





Definition of Pearson Correlation Coefficient














\(\ds \)

\(=\)







\(\ds \frac {\paren {\map {\operatorname {Cov} } {X, Y} }^2} {\var X \var Y}\)




















\(\ds \)

\(\le\)







\(\ds 1\)





Square of Covariance is Less Than or Equal to Product of Variances



So:

$\size {\map \rho {X, Y} } \le 1$
$\blacksquare$


This article is complete as far as it goes, but it could do with expansion.In particular: There's a proof available here that uses Cauchy's Inequality, but that means pulling apart the Definition of Pearson Correlation Coefficient and covariance and so onYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): correlation coefficient: 1.
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): correlation coefficient: 1.
2011: Morris H. DeGroot and Mark J. Schervish: Probability and Statistics (4th ed.): $4.6$: Covariance and Correlation: Theorem $4.6.3$




