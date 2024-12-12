# 

Source: https://proofwiki.org/wiki/Generalization_to_Dudeney%27s_Distribution_Problem


This article needs to be linked to other articles.In particular: including categioryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

It has been suggested that this page be renamed.In particular: Dudeney's Distribution ProblemTo discuss this page in more detail, feel free to use the talk page.
Theorem
Suppose $n > 1$ people, each with $a_1, a_2, \dots, a_n$ dollars, redistribute their wealth as follows:
Going in order of their index, each person doubles everyone else's money by giving out their own money.
If they all have the same amount of money after the process, the least (strictly) positive integral solution is:

$a_j = 2^{j - 1} n + 1, \quad j = 1, \dots, n$
and each person will end up with $2^n$ dollars each.


Proof
Let us define the total amount of money $S = \ds \sum_{j \mathop = 1}^n a_j$.
Consider the wealth of the $j$th person.
They would see their wealth doubled $j - 1$ times:

$a_j \to 2^{j - 1} a_j$
Then they would have to give out money to double everyone else's money:

$2^{j - 1} a_j \to 2^{j - 1} a_j - \paren {S - 2^{j - 1} a_j} = 2^j a_j - S$
since the total amount of money never changes.
Finally, their money will be doubled for $n - j$ more times:

$2^j a_j - S \to 2^{n - j} \paren {2^j a_j - S} = 2^n a_j - 2^{n - j} S$

Since everyone ends up with the same amount of money, we have:














\(\ds 2^n a_j - 2^{n - j} S\)

\(=\)







\(\ds \frac S n\)




















\(\ds a_j\)

\(=\)







\(\ds 2^{-n} \paren {\frac S n + 2^{n - j} S}\)




















\(\ds \)

\(=\)







\(\ds \frac {S \paren {2^{n - j} n + 1} } {n 2^n}\)









Since $a_1 \in \mathbb N$ and $n 2^{n - 1} + 1$ is coprime to both $n$ and $2$ for $n > 1$, by Euclid's Lemma, $S$ must be a multiple of $n 2^n$.
Hence the least positive integral solution is attained at $S = n2^n$.
This shows that $a_j = 2^{j - 1} n + 1$ is the least positive integral solution, and each person will end up with $\dfrac S n = 2^n$ dollars.
$\blacksquare$


Also see
Henry Ernest Dudeney/Puzzles and Curious Problems/11 - Distribution: Case of $n = 9$
Henry Ernest Dudeney/Modern Puzzles/12 - A Weird Game: Case of $n = 7$




