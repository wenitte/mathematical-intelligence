# 

Source: https://proofwiki.org/wiki/Product_of_Summations_is_Summation_Over_Cartesian_Product_of_Products


It has been suggested that this page or section be merged into Product of Summations.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

This article needs to be tidied.In particular: Structure the induction proofs with headings, and perhaps extract some of the bunk into a lemma / lemmataPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
This is a generalization of the distributive law:

$\ds \prod_{a \mathop \in A} \sum_{b \mathop \in B_a} t_{a, b} = \sum_{c \mathop \in \prod \limits_{a \mathop \in A} B_a} \prod_{a \mathop \in A} t_{a, c_a}$
where the product of sets $\ds \prod_{a \mathop \in A} B_a$ is taken to be a cartesian product.


This article, or a section of it, needs explaining.In particular: In order to make this comprehensible, the precise nature of $A$ and $B$ need to be defined. Presumably $A$ is a set (of numbers?), and $B$ is a family of sets of numbers indexed by $A$? And the $t$s are elements of $B$ and are numbers? I'm having difficulty.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Definition of Terms
In its simplest form $A$ is a range of positive natural numbers in $\closedint 1 n$.
$B$ is vector of sets, indexed by the elements of $A$.
$A$ also indexes elements of the cartesian product which are n-tuples.
The sets $B_a$ are finite sets, usually of integers.
These form the indexes of summation.
However in its usage in Product Form of Sum on Completely Multiplicative Function, $A$ may not be consecutive integers.
In that usage, $A$ are primes.
An extra level of abstraction is required, to map from the elements of a set to consecutive positive natural numbers that index the n-tuples formed from the Cartesian products.


Cartesian Products
To be continued.


Example
Let:














\(\ds A\)

\(=\)







\(\ds \set {1, 2}\)




















\(\ds B_1\)

\(=\)







\(\ds \set {1, 2}\)




















\(\ds B_2\)

\(=\)







\(\ds \set {1, 2}\)










Then:














\(\ds \prod_{a \mathop \in A} \sum_{b \mathop \in B_a} t_{a, b}\)

\(=\)







\(\ds \paren {t_{1, 1} + t_{1, 2} } \paren {t_{2, 1} + t_{2, 2} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{c \mathop \in \prod \limits_{a \mathop \in A} B_a} \prod_{a \mathop \in A} t_{a, c_a}\)




















\(\ds \)

\(=\)







\(\ds \sum_{c \mathop \in \set {\tuple {m, n}: m \mathop \in B_1 \mathop \land n \mathop \in B_2} } t_{1, c_1} t_{2, c_2}\)




















\(\ds \)

\(=\)







\(\ds \sum_{c \mathop \in \set {\tuple {1, 1}, \tuple {1, 2}, \tuple {2, 1}, \tuple {2, 2} } } t_{1, c_1} t_{2, c_2}\)




















\(\ds \)

\(=\)







\(\ds t_{1, 1} t_{2, 1} + t_{1, 1} t_{2, 2} + t_{1, 2} t_{2, 1} + t_{1, 2} t_{2, 2}\)











Usage
Used in the derivation of the Euler product expression for the Riemann Zeta function.


Proof
For simplicity, let $A = \closedint 1 n$.
This reduces the complexity without loss of generality, as if we wanted to use an arbitrary set we could store the actual elements in an $n$-tuple and index them.
So we can think of $\closedint 1 n$ as representing the actual elements.
Use induction on $n$:
For $n = 1$:

$\ds \sum_{b \mathop \in B_1} t_{1, b} = \sum_{c \mathop \in B_1}  t_{1, c}$
which is true, proving the case.
Assume the formula is true for $n$, and prove it for $n + 1$.

$\ds \paren {\prod_{a \mathop = 1}^n \sum_{b \mathop \in B_a} t_{a, b} } \paren {\sum_{b \mathop \in B_{n + 1} } t_{n + 1, b} } = \paren {\sum_{c \mathop \in \prod \limits_{a \mathop = 1}^n B_a} \prod_{a \mathop = 1}^n t_{a, c_a} } \paren {\sum_{b \mathop \in B_{n + 1} } t_{n + 1, b} }$
We need this result which we will prove below,

$\ds \paren {\sum_{c \mathop \in \prod \limits_{a \mathop = 1}^n B_a} \prod_{a \mathop = 1}^n t_{a, c_a} } \sum_{b \mathop \in X_{n + 1} } t_{n + 1, b} = \sum_{c \mathop \in \paren {\prod \limits_{a \mathop = 1}^n B_a} \times X_{n + 1} } \prod_{a \mathop = 1}^{n + 1} t_{a, c_a}$
which gives:














\(\ds \paren {\prod_{a \mathop = 1}^n \sum_{b \mathop \in B_a} t_{a, b} } \paren {\sum_{b \mathop \in B_{n + 1} } t_{n + 1, b} }\)

\(=\)







\(\ds \sum_{c \mathop \in \paren {\prod_{a \mathop = 1}^n B_a} \times B_{n + 1} } \prod_{a \mathop = 1}^{n + 1} t_{a, c_a}\)




















\(\ds \)

\(=\)







\(\ds \sum_{c \mathop \in \prod_{a = 1}^{n + 1} B_a} \prod_{a \mathop = 1}^{n + 1} t_{a, c_a}\)










This completes the induction case on $n$ while assuming:

$\ds \paren {\sum_{c \mathop \in \prod \limits_{a \mathop = 1}^n B_a} \prod_{a \mathop = 1}^n t_{a, c_a} } \sum_{b \mathop \in X_{n + 1} } t_{n + 1, b} = \sum_{c \mathop \in \paren {\prod \limits_{a \mathop = 1}^n B_a} \times X_{n + 1} } \prod_{a \mathop = 1}^{n + 1} t_{a, c_a}$

To prove this, use induction on the size $X_{n + 1}$.
If $X_{n + 1}$ has a single element:

$\ds \paren {\sum_{c \mathop \in \prod \limits_{a \mathop = 1}^n B_a} \prod_{a \mathop = 1}^n t_{a, c_a} } t_{n + 1, k} = \sum_{c \mathop \in \paren {\prod \limits_{a \mathop = 1}^n B_a} \times \set k} \prod_{a \mathop = 1}^{n + 1} t_{a, c_a}$
which is true, proving the case for size $1$.

Now assume it is true for $X_{n + 1}$ and $Y_{n + 1}$ we will prove it for $Z_{n + 1}$.
This corresponds to the induction step if the size of $Y_{n + 1}$ is $1$.
So all we are doing is proving a more general case.
We do this because $X_{n + 1}$ and $Y_{n + 1}$ are then symmetrical, and so the proof is easier to understand.

$Z_{n + 1} = X_{n + 1} \cup Y_{n + 1}$

This article, or a section of it, needs explaining.In particular: It is not clear from the above paragraph exactly what is being doneYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then:

$\ds \sum_{b \mathop \in Z_{n + 1} } t_{n + 1, b} = \paren {\sum_{b \mathop \in X_{n + 1} } t_{n + 1, b} + \sum_{b \mathop \in Y_{n + 1} } t_{n + 1, b} }$

Thus:














\(\ds \)

\(\)







\(\ds \paren {\sum_{c \mathop \in \prod \limits_{a \mathop = 1}^n B_a} \prod_{a \mathop = 1}^n t_{a, c_a} } \sum_{b \mathop \in Z_{n + 1} } t_{n + 1, b}\)





from left hand side of assumption














\(\ds \)

\(=\)







\(\ds \paren {\sum_{c \mathop \in \prod \limits_{a \mathop = 1}^n B_a} \prod_{a \mathop = 1}^n t_{a, c_a} } \paren {\sum_{b \mathop \in X_{n + 1} } t_{n + 1, b} + \sum_{b \mathop \in Y_{n + 1} } t_{n + 1,b} }\)





substituting for $Z_{n + 1}$














\(\ds \)

\(=\)







\(\ds \paren {\sum_{c \mathop \in \prod \limits_{a \mathop = 1}^n B_a} \prod_{a \mathop = 1}^n t_{a, c_a} } \sum_{b \mathop \in X_{n + 1} } t_{n + 1, b} + \paren {\sum_{c \mathop \in \prod \limits_{a \mathop = 1}^n B_a} \prod_{a \mathop = 1}^n t_{a, c_a} } \sum_{b \mathop \in Y_{n + 1} } t_{n + 1, b}\)




















\(\ds \)

\(=\)







\(\ds \sum_{c \mathop \in \paren {\prod \limits_{a \mathop = 1}^n B_a} \times X_{n + 1} } \prod_{a \mathop = 1}^{n + 1} t_{a, c_a} + \sum_{c \mathop \in \paren {\prod \limits_{a \mathop = 1}^n B_a} \times Y_{n + 1} } \prod_{a \mathop = 1}^{n + 1} t_{a, c_a}\)





using the assumption for $X$ and $Y$














\(\ds \)

\(=\)







\(\ds \sum_{c \mathop \in \paren {\paren {\prod \limits_{a \mathop = 1}^n B_a} \times X_{n + 1} \mathop \cup \paren {\prod \limits_{a \mathop = 1}^n B_a} \times Y_{n + 1} } } \prod_{a \mathop = 1}^{n + 1} t_{a, c_a}\)





merging the two summations into one




The cartesian product is:














\(\ds \)

\(\)







\(\ds \paren {\prod_{a \mathop = 1}^n B_a} \times X_{n + 1} \cup \paren {\prod_{a \mathop = 1}^n B_a} \times Y_{n + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {\prod_{a \mathop = 1}^n B_a} \times \paren {X_{n + 1} \cup Y_{n + 1} }\)





using $R \times P \cup R \times Q = R \times \paren {P \cup Q}$














\(\ds \)

\(=\)







\(\ds \paren {\prod_{a \mathop = 1}^n B_a} \times Z_{n + 1}\)





using $X_{n + 1} \cup Y_{n + 1} = Z_{n + 1}$




Substituting back in:

$\ds \sum_{c \mathop \in \paren {\paren {\prod \limits_{a \mathop = 1}^n B_a} \times X_{n + 1} \mathop \cup \paren {\prod \limits_{a \mathop = 1}^n B_a} \times Y_{n + 1} } } \prod_{a \mathop = 1}^{n + 1} t_{a,c_a} = \sum_{c \mathop \in \paren {\prod \limits_{a \mathop = 1}^n B_a} \times Z_{n + 1} } \prod_{a \mathop = 1}^{n + 1} t_{a, c_a}$
which is the right hand side of the assumption.
$\blacksquare$





