# 

Source: https://proofwiki.org/wiki/Closure_of_Real_Interval_is_Closed_Real_Interval/Proof_1

Theorem
Let $I$ be a non-empty real interval such that one of these holds:

$I = \openint a b$
$I = \hointr a b$
$I = \hointl a b$
$I = \closedint a b$
Let $I^-$ denote the closure of $I$.

Then $I^-$ is the closed real interval $\closedint a b$.


Proof
There are four cases to cover:

$(1): \quad$ Let $I = \openint a b$.
From Closure of Open Real Interval is Closed Real Interval:

$I^- = \closedint a b$
$\Box$


$(2): \quad$ Let $I = \hointr a b$.
From Closure of Half-Open Real Interval is Closed Real Interval:

$I^- = \closedint a b$
$\Box$


$(3): \quad$ Let $I = \hointl a b$.
From Closure of Half-Open Real Interval is Closed Real Interval:

$I^- = \closedint a b$
$\Box$


$(4): \quad$ Let $I = \closedint a b$.
From Closed Real Interval is Closed in Real Number Line:

$I$ is closed in $\R$.
From Set is Closed iff Equals Topological Closure:

$I^- = \closedint a b$
$\Box$

Thus all cases are covered.
The result follows by Proof by Cases.
$\blacksquare$





