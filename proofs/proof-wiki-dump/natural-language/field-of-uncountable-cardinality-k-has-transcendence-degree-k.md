# 

Source: https://proofwiki.org/wiki/Field_of_Uncountable_Cardinality_K_has_Transcendence_Degree_K


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $F$ be a field of uncountable cardinality $\kappa$.
Then $F$ has transcendence degree $\kappa$ over its prime field.


Proof
We prove the theorem for fields with characteristic $p = 0$.
In the case where $p$ is a prime, the proof is similar, but instead we view the fields as extensions of $\Z / \Z_p$.
The main idea is to exploit the lower cardinality of sets of polynomials in order to keep finding algebraically independent elements of $F$.

Since each characteristic $0$ field contains a copy of $\Q$ as its prime field, we can view $F$ as a field extension over $\Q$.
We will show that $F$ has a subset of cardinality $\kappa$ which is algebraically independent over $\Q$.
Since $\kappa$ is the largest possible cardinality for a subset of $F$, this will establish the theorem.

We build the claimed subset of $F$ by transfinite induction and implicit use of the axiom of choice.
For each ordinal $\alpha < \kappa$ we define a set $S_\alpha$.
We will build the sets so that each $S_\alpha$ has cardinality equal to that of $\alpha$ and is algebraically independent over $\Q$.

Let $S_0 = \O$.
Let $S_1$ be a singleton containing some element of $F$ which is not algebraic over $\Q$.
This is possible from Algebraic Numbers are Countable.
Define $S_\beta$ for successor ordinals $\beta = \alpha + 1 < \kappa$ to be $S_\alpha$ together with an element of $F$ which is not a root of any non-trivial polynomial with coefficients in $\Q \cup S_\alpha$.



This article, or a section of it, needs explaining.In particular: Determine whether "trivial" polynomial actually means the Definition:Null Polynomial over Ring or maybe one of Definition:Polynomial of Degree Zero or something -- whichever is meant, replace with what we have here, and make a note on that page to indicate this alternative terminology.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
From Set of Polynomials over Infinite Set has Same Cardinality there are only $\card {\Q \cup S_\alpha} = \aleph_0 + \card \alpha < \kappa$ many such polynomials.
hence the above construction is possible.

From Polynomial over Field has Finitely Many Roots and the Cardinality of Infinite Union of Infinite Sets, the union of $\kappa$ many finite sets is at most size $\kappa$.
Thus there are are this many roots of such polynomials
Define $S_\beta$ for limit ordinals by $\ds S_\beta = \bigcup_{\alpha \mathop < \beta} S_\alpha$.
We can then define $S_\kappa$ to be $\ds \bigcup_{\alpha \mathop < \kappa} S_\alpha$.
This is a set of size $\kappa$ since its elements can be paired with the ordinals less than $\kappa$.  

It is now demonstrated that it is algebraically independent over $\Q$.


This article, or a section of it, needs explaining.In particular: At this point it is easy to lose track of what "it" is. I have indeed done so. So it is worth restating here what which particular object we are demonstrating to be algebraically independent.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\map P {x_1, \ldots, x_n}$ be a non-trivial polynomial with coefficients in $\Q$ and elements $a_1, \ldots, a_n$ in $F$.  
Without loss of generality, it is assumed that $a_n$ was added at an ordinal $\alpha + 1$ later than the other elements.  
Then $\map P {a_1, \ldots, a_{n - 1}, x_n}$ is a polynomial with coefficients in $\Q \cup S_\alpha$.  
$a_n$ was selected at stage $\alpha + 1$ so as not to be root of such a polynomial.
So $\map P {a_1, \ldots, a_{n - 1}, x_n} \ne 0$.
Thus it is algebraically independent over $\Q$.
$\blacksquare$


Work In ProgressIn particular: ... implicit use of the axiom of choice. Determine if its necessaryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.




