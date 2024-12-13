# 

Source: https://proofwiki.org/wiki/Probability_Generating_Function_of_Shifted_Random_Variable

Theorem
Let $X$ be a discrete random variable whose probability generating function is $\map {\Pi_X} s$.
Let $k \in \Z_{\ge 0}$ be a positive integer.
Let $Y$ be a discrete random variable such that $Y = X + m$.

Then

$\map {\Pi_Y} s = s^m \map {\Pi_X} s$
where $\map {\Pi_Y} s$ is the probability generating function of $Y$.


Proof
From the definition of p.g.f:

$\ds \map {\Pi_X} s = \sum_{k \mathop \ge 0} \map \Pr {X = k} s^k$
By hypothesis:

$\map \Pr {Y = k + m} = \map \Pr {X = k}$
Thus:














\(\ds \map {\Pi_Y} s\)

\(=\)







\(\ds \sum_{k + m \mathop \ge 0} \map \Pr {X = k} s^{k + m}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k + m \mathop \ge 0} \map \Pr {X = k} s^m s^k\)




















\(\ds \)

\(=\)







\(\ds s^m \sum_{k \mathop \ge 0} \map \Pr {X = k} s^k\)





Translation of Index Variable of Summation




This needs considerable tedious hard slog to complete it.In particular: The last step needs to be expanded and explained as to why we can just lose the $m$ out of the index.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
From the definition of a probability generating function:

$\map {\Pi_Y} s = s^m \map {\Pi_X} s$
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.2$: Integer-valued random variables: Exercise $3$




