# 

Source: https://proofwiki.org/wiki/Closure_of_Convex_Set_in_Topological_Vector_Space_is_Convex



Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $X$ be a topological vector space over $\Bbb F$.
Let $C \subseteq X$ be convex.

Then the closure $C^-$ of $C$ is convex.


Proof
Let $t \in \closedint 0 1$.
Since $C$ is convex, we have: 

$t C + \paren {1 - t} C \subseteq C$
We show that: 

$t C^- + \paren {1 - t} C^- \subseteq C^-$
We have: 














\(\ds t C^- + \paren {1 - t} C^-\)

\(=\)







\(\ds \paren {t C}^- + \paren {\paren {1 - t} C}^-\)





Dilation of Closure of Set in Topological Vector Space is Closure of Dilation














\(\ds \)

\(\subseteq\)







\(\ds \paren {t C + \paren {1 - t} C}^-\)





Sum of Closures is Subset of Closure of Sum in Topological Vector Space














\(\ds \)

\(\subseteq\)







\(\ds C^-\)





applying Topological Closure of Subset is Subset of Topological Closure since $t C + \paren {1 - t} C \subseteq C$



$\blacksquare$


Also see
Closure of Convex Subset in Normed Vector Space is Convex


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.13$: Theorem




