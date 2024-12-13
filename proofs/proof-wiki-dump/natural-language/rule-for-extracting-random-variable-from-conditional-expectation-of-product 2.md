# 

Source: https://proofwiki.org/wiki/Rule_for_Extracting_Random_Variable_from_Conditional_Expectation_of_Product



Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $\GG \subseteq \Sigma$ be a sub-$\sigma$-algebra.
Let $X$ and $Y$ be integrable random variables such that: 

$X Y$ is integrable
and:

$Y$ is $\GG$-measurable.
Let $\expect {X \mid \GG}$ be a version of the conditional expectation of $X$ given $\GG$.
Let $\expect {X Y \mid \GG}$ be a version of the conditional expectation of $X Y$ given $\GG$.

Then: 

$\expect {X Y \mid \GG} = Y \expect {X \mid \GG}$ almost everywhere.


Proof
Let $X$ and $Y$ be non-negative random variables. 
We show first that the statement holds if $Y = \chi_A$ for some $A \in \GG$. 
We show that $Y \expect {X \mid \GG}$ is a version of the conditional expectation of $X Y$ given $\GG$.
We will then obtain the demand from Existence and Essential Uniqueness of Conditional Expectation Conditioned on Sigma-Algebra.
Then, for any $G \in \GG$ we have: 














\(\ds \expect {Y \expect {X \mid \GG} \cdot \chi_G}\)

\(=\)







\(\ds \expect {\expect {X \mid \GG} \cdot \chi_{A \cap G} }\)





Characteristic Function of Intersection














\(\ds \)

\(=\)







\(\ds \expect {X \cdot \chi_{A \cap G} }\)





Definition of Conditional Expectation on Sigma-Algebra














\(\ds \)

\(=\)







\(\ds \expect {X \cdot \chi_A \cdot \chi_G}\)





Characteristic Function of Intersection














\(\ds \)

\(=\)







\(\ds \expect {X Y \cdot \chi_G}\)









So we have:

$\expect {X Y \mid \GG} = Y \expect {X \mid \GG}$ almost everywhere
for all $Y$ of the form $\chi_A$ for $A \in \GG$. 

Now let $Y$ be a positive simple real-valued random variable that is $\GG$-measurable.
From Simple Function has Standard Representation, there exists:

a finite sequence $a_1, \ldots, a_n$ of real numbers
a partition $A_1, A_2, \ldots, A_n$ of $\GG$-measurable sets
with:

$\ds Y = \ds \sum_{j \mathop = 1}^n a_j \chi_{A_j}$
We then have:














\(\ds \expect {X Y \mid \GG}\)

\(=\)







\(\ds \expect {X \paren {\sum_{j \mathop = 1}^n a_j \chi_{A_j} } \mid \GG}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n a_j \expect {X \chi_{A_j} \mid \GG}\)





Conditional Expectation is Linear














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n a_j \chi_{A_j} \expect {X \mid \GG}\)





applying the theorem for characteristic functions














\(\ds \)

\(=\)







\(\ds \expect {X \mid \GG} \sum_{j \mathop = 1}^n a_j \chi_{A_j}\)




















\(\ds \)

\(=\)







\(\ds Y \expect {X \mid \GG}\)










Now let $Y$ be a general non-negative random variable. 
Similarly, there exists an increasing sequence $\sequence {Y_n}_{n \mathop \in \N}$ of positive simple random variables such that: 

$\ds \map Y \omega = \lim_{n \mathop \to \infty} \map {Y_n} \omega$
for $\omega \in \Omega$. 
Then $\sequence {X Y_n}_{n \mathop \in \N}$ is an increasing sequence of random variables.
So, by the Conditional Monotone Convergence Theorem, we have: 

$\ds \lim_{n \mathop \to \infty} \expect {X Y_n \mid \GG} = \expect {X Y \mid \GG}$ almost everywhere.
We also see that: 

$\ds \lim_{n \mathop \to \infty} Y_n \expect {X \mid \GG} = Y \expect {X \mid \GG}$
Hence we have: 

$\expect {X Y \mid \GG} = Y \expect {X \mid \GG}$ almost everywhere
when $X$ and $Y$ are non-negative. 

Now, suppose that $X$ and $Y$ are general integrable random variables.
Then we have: 














\(\ds \expect {X Y \mid \GG}\)

\(=\)







\(\ds \expect {\paren {X^+ - X^-} \paren {Y^+ - Y^-} \mid \GG}\)




















\(\ds \)

\(=\)







\(\ds \expect {X^+ Y^+ - X^- Y^+ - X^+ Y^- + X^- Y^- \mid \GG}\)




















\(\ds \)

\(=\)







\(\ds \expect {X^+ Y^+ \mid \GG} - \expect {X^- Y^+ \mid \GG} - \expect {X^+ Y^- \mid \GG} + \expect {X^- Y^- \mid \GG}\)





Conditional Expectation is Linear



From Function Measurable iff Positive and Negative Parts Measurable, we have that:

$Y^+$ and $Y^-$ are $\GG$-measurable.
Then we have, since the theorem is known to hold for non-negative random variables:














\(\ds \expect {X^+ Y^+ \mid \GG} - \expect {X^- Y^+ \mid \GG} - \expect {X^+ Y^- \mid \GG} + \expect {X^- Y^- \mid \GG}\)

\(=\)







\(\ds Y^+ \expect {X^+ \mid \GG} - Y^+ \expect {X^- \mid \GG} - \paren {Y^- \expect {X^+ \mid \GG} - Y^- \expect {X^- \mid \GG} }\)




















\(\ds \)

\(=\)







\(\ds Y^+ \expect {X^+ - X^- \mid \GG} - Y^- \expect {X^+ - X^- \mid \GG}\)





Conditional Expectation is Linear














\(\ds \)

\(=\)







\(\ds \expect {X \mid \GG} \paren {Y^+ - Y^-}\)




















\(\ds \)

\(=\)







\(\ds Y \expect {X \mid \GG}\)









$\blacksquare$


Also known as
Applying this rule is often known as taking out what is known.


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $9.7$: Properties of conditional expectation: a list




